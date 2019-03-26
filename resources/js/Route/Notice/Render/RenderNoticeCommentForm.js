import React, { Component } from 'react';
import styled from 'styled-components';


const Form = styled.form`
    textarea{
        width: 100%;
        height: 78px;
        padding: 1rem;
        border:0;
        background-color: var(--light2);
        appearance : none;
    }
`;

const ButtonBox = styled.div`
    button{
        width: 100%;
        border: 0;
        padding: 1rem 0;
        transition: all 0.3s;
        appearance : none;

        &:hover{
            transform:scale(0.95);
        }
    }
`;


class RenderNoticeCommentForm extends Component {
    render() {
        return (
            <div>
                {this.props.id === null
                ? (
                    ''
                )
                : (
                    <>
                    <Form onSubmit={this.props.commentSubmit}>
                        <textarea
                            onChange={this.props.commentChangeBody}
                            value={this.props.body || ''}
                            placeholder="댓글을 입력해주세요."
                        />
                        <ButtonBox>
                            <button type="submit">댓글작성</button>
                        </ButtonBox>
                    </Form>
                    </>
                )}
            </div>
        )
    }
}



export default RenderNoticeCommentForm;
