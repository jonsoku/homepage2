import React, { Component } from 'react';
import styled from 'styled-components';

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
        return (
        <div>
            {this.props.noticeComments.map((noticeComments, index) => (
                <Ul key={index}>
                    <Li>
                        <span>{noticeComments.user.name}</span>
                        <small>{noticeComments.created_at}</small>
                        {noticeComments.user.id === this.props.id ? <button onClick={()=>this.props.onCommentDelete(noticeComments.id)}>X</button> : ''}
                    </Li>
                    <Li><p>{noticeComments.body}</p></Li>
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
