import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`

    margin-top: 5rem;
    background-color : var(--grey);
    padding: 1rem;
    box-shadow : var(--box-shadow);

    position:relative;

    &::before{
        padding: 1.1rem;
        position:absolute;
        content: 'Comment';
        left:0;
        top:-2rem;
        background-color:var(--black);
        color:var(--light);
        padding: .5rem 1rem;
    }

    button{
        width: 100%;
        border: 0;
        background-color:inherit;
        margin: 0.3rem;
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    border:0;
    height: 100px;

`;

export default class RenderYoutubeCommentForm extends Component {
    render() {
        return (
        <div>
            <Form onSubmit={this.props.onCommentSubmit}>
                <Textarea
                    onChange={this.props.onChangeBody}
                    value={this.props.body}
                    placeholder="자유롭게 토론해요!"
                />
                <button type="submit">댓글작성</button>
            </Form>
        </div>
        )
    }
}
