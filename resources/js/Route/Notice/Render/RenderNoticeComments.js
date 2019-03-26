import React, { Component } from 'react';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';
import Axios from 'axios';

const Ul = styled.ul`
    margin: 1.5rem 0;
`;
const Li = styled.li`
    position: relative;
    span{
        margin-left: 2.1rem;
        font-weight: 900;
        margin-right: 1rem;
    }
    small{
        font-size: .6rem;
    }
    p{
        margin-left: 2.1rem;
        margin-top: 1rem;
    }
    button{
        position:absolute;
        top:0;
        left:0;
        border:0;
        background-color:red;
        color: #fff;

    }
`;

class RenderNoticeComments extends Component {

    constructor(){
        super();
        this.state = {
            editing : false,
            body : '',
            editId : '',
        }
        this.handleEditing = this.handleEditing.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e){
        e.preventDefault();
        return await Axios.put(`${this.props.url}/noticeComments/${this.state.editId}`,{
            body : this.state.body
        }).catch(error => console.log(error)).then(
            this.setState({
                body : '',
                editing : false
            })
        )
    }

    handleEditingChange(e){
        this.setState({
            body : e.target.value
        })
    }

    handleEditing(id){
        this.setState({
            editing : true,
            editId : id
        })
    }

    render() {

        const viewStyle = { };
        const editStyle = { };

        if(this.state.editing){
            viewStyle.display = "none";
        }else{
            editStyle.display = "none"
        }

        console.log(this.props)
        return (
            <div>
                <div>
                    <form style={editStyle} onSubmit={this.handleSubmit}>
                        <textarea
                        onChange={this.handleEditingChange.bind(this)}
                        value={this.state.body}
                        />
                        <button type="submit">수정</button>
                    </form>

                </div>

                {this.props.noticeComments.map((noticeComment, index) => (
                    <Ul
                    key={index}
                    styled={viewStyle}
                    onDoubleClick={noticeComment.user_id === this.props.id ? ()=> this.handleEditing(noticeComment.id) : ''}
                    >
                        <Li>
                            <span>{noticeComment.user.name}</span>
                            <small>{noticeComment.created_at}</small>
                            {noticeComment.user.id === this.props.id ? <button onClick={()=>this.props.onCommentDelete(noticeComment.id)}>X</button> : ''}
                        </Li>
                        <Li>
                            <p>{noticeComment.body}</p>
                        </Li>
                    </Ul>
                ))}
            </div>
        )
    }
}
RenderNoticeComments.defaultProps = {
    id: 0
};
export default RenderNoticeComments;
