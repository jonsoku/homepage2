import React, { Component } from 'react';
import styled from 'styled-components';
const Form = styled.form`
    margin-top: 5rem;
    background-color: var(--grey);
    padding: 1rem;
    box-shadow: var(--box-shadow);

    position: relative;

    &::before {
        padding: 1.1rem;
        position: absolute;
        content: 'Edit Comment';
        left: 0;
        top: -2rem;
        background-color: var(--black);
        color: var(--light);
        padding: 0.5rem 1rem;
    }

    button {
        width: 100%;
        border: 0;
        background-color: inherit;
        margin: 0.3rem;
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    border: 0;
    height: 100px;
`;
export default class RenderYoutubeCommentEditForm extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleCommentEditSubmit}>
                    <Textarea onChange={this.props.handleChangeEditBody} value={this.props.EditBody} />
                    <button type="submit">댓글 수정</button>
                </Form>
            </div>
        );
    }
}
