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



    render() {

        const viewStyle = { };
        const editStyle = { };

        if(this.props.editing){
            viewStyle.display = "none";
        }else{
            editStyle.display = "none"
        }

        return (
            <div>
                <div>
                    <form style={editStyle} onSubmit={this.props.handleSubmit2}>
                        <textarea
                        onChange={this.props.handleEditingChange}
                        value={this.props.EditBody}
                        />
                        <button type="submit">수정</button>
                    </form>

                </div>

                {this.props.noticeComments.map((noticeComment, index) => (
                    <Ul
                    key={index}
                    styled={viewStyle}
                    onDoubleClick={noticeComment.user_id === this.props.id ? ()=> this.props.handleEditing(noticeComment.id) : '' }
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
