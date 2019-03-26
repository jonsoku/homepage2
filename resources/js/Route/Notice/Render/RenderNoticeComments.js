import React, { Component } from 'react';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';
import Axios from 'axios';

const Form = styled.form`
    textarea {
        width: 100%;
        height: 78px;
        padding: 1rem;
        border: 0;
        background-color: var(--black);
        appearance: none;
        color: var(--light);
    }
`;

const ButtonBox = styled.div`
    button {
        width: 100%;
        border: 0;
        padding: 1rem 0;
        transition: all 0.3s;
        appearance: none;

        &:hover {
            transform: scale(0.95);
        }
    }
`;

const Ul = styled.ul`
    margin: 1.5rem 0;
`;
const Li = styled.li`
    position: relative;
    span {
        margin-left: 2.1rem;
        font-weight: 900;
        margin-right: 1rem;
    }
    small {
        font-size: 0.6rem;
        margin-right: 1rem;
    }
    p {
        margin-left: 2.1rem;
        margin-top: 1rem;
    }
    button {
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
        background-color: red;
        color: #fff;
    }
`;

class RenderNoticeComments extends Component {
    render() {
        const viewStyle = {};
        const editStyle = {};
        if (this.props.editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';
        }
        console.log(this.props);
        return (
            <div>
                <div>
                    <Form style={editStyle} onSubmit={this.props.handleSubmit2}>
                        <div>
                            <textarea
                                onChange={this.props.handleEditingChange}
                                value={this.props.EditBody}
                                placeholder="댓글을 수정해주세요."
                            />
                        </div>
                        <ButtonBox>
                            <button type="submit">댓글수정</button>
                        </ButtonBox>
                    </Form>
                </div>

                {this.props.noticeComments.map((noticeComment, index) => (
                    <Ul
                        key={index}
                        styled={viewStyle}
                        onDoubleClick={
                            noticeComment.user_id === this.props.id
                                ? () => this.props.handleEditing(noticeComment.id)
                                : ''
                        }
                    >
                        <Li>
                            <span>{noticeComment.user.name}</span>
                            {noticeComment.created_at === noticeComment.updated_at ? (
                                <small>등록일 : {noticeComment.created_at}</small>
                            ) : (
                                <small>수정일 :{noticeComment.updated_at}</small>
                            )}
                            {noticeComment.user.id === this.props.id ? (
                                <button onClick={() => this.props.onCommentDelete(noticeComment.id)}>X</button>
                            ) : (
                                ''
                            )}
                        </Li>
                        <Li>
                            <p>{noticeComment.body}</p>
                        </Li>
                    </Ul>
                ))}
            </div>
        );
    }
}
RenderNoticeComments.defaultProps = {
    id: 0
};
export default RenderNoticeComments;
