import React, { Component } from 'react';
import styled from 'styled-components';

const CommentsBox = styled.div`
    margin-top: 5rem;
    background-color: black;
    padding: 1.1rem;
    background-color: var(--grey);
    box-shadow: var(--box-shadow);
    position: relative;

    &::before {
        padding: 1.1rem;
        position: absolute;
        content: 'Discussion';
        left: 0;
        top: -2rem;
        background-color: var(--black);
        color: var(--light);
        padding: 0.5rem 1rem;
    }

    margin-bottom: 5rem;
`;

const CommentBox = styled.div`
    background-color: var(--grey);
    border-bottom: 1px solid var(--black);
    padding-bottom: 1.5rem;
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
    div:first-child {
        background-color: inherit;
        font-weight: 900;
        font-size: 0.7rem;

        span {
            margin-left: 1rem;
            font-size: 0.5rem;
            background-color: inherit;
            font-weight: 100;
        }
    }

    div:nth-child(2) {
        margin-top: 1rem;
        background-color: inherit;
    }
`;

export default class RenderYotubueComments extends Component {
    render() {
        return (
            <>
                <CommentsBox>
                    {this.props.youtubeComments.map((youtubeComment, index) => (
                        <CommentBox key={index}>
                            <div>
                                {youtubeComment.user && youtubeComment.user.name}
                                <span>{youtubeComment.created_at}</span>
                            </div>
                            <div>{youtubeComment.body}</div>
                            <div>
                                <button onClick={() => this.props.handleCommentDelete(youtubeComment.id)}>삭제</button>
                                <button onClick={() => this.props.handleEditingMode(youtubeComment.id)}>수정</button>
                            </div>
                        </CommentBox>
                    ))}
                </CommentsBox>
            </>
        );
    }
}
