import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Ul = styled.ul`
    margin : 2rem auto 0;
`;
const Li = styled.li`

    background-color: var(--white);
    padding : 1rem;
    &:nth-child(1){
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        p{
            margin: 0.3rem 0;
        }
        span{
            display:inline-block;
            width:4rem;
            font-weight: 900;
            text-transform: uppercase;
        }
    }

    &:nth-child(2){
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        margin-top: 1rem;
        height: 50vh;
    }
`;

const ButtonBox = styled.div`
    text-align:center;
    button{
        width: 100px;
        margin: 2rem 1rem;
        padding: 1rem;
        font-size: .9rem;
        border:0;
        background-color: var(--black);
        color: var(--light2);
        cursor:pointer;
        border-radius: 20px;
        transition:all .5s;
        &:hover{
            transform:scale(0.9)
        }
    }
`;


class RenderNotice extends Component {
    render() {
        return (
            <>
            <Ul>
                <Li>
                    <p><span>date</span>{this.props.notice.created_at}</p>
                    <p><span>name</span>{this.props.notice.user && this.props.notice.user.name}</p>
                    <p><span>title</span>{this.props.notice.title}</p>
                </Li>
                <Li>
                    <span>{this.props.notice.description}</span>
                </Li>
            </Ul>
            <ButtonBox>
                <button onClick={()=>location.href="/#/notices"}>뒤로가기</button>

                {this.props.id === 1
                ? (
                    <>
                    <button onClick={()=>this.props.onEdit(this.props.notice.id)}>수정</button>
                    <button onClick={()=>this.props.onDelete(this.props.notice.id)}>삭제</button>
                    </>
                )
                : ''}

            </ButtonBox>
            </>
        )
    }
}
RenderNotice.defaultProps = {
    id: 0
};

export default RenderNotice;
