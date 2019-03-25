import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Ul = styled.ul`
    width: 100%;
    margin : 2rem auto 0;
    padding: 2rem;

`;

const Li = styled.li`

    background-color: var(--white);
    padding : 1rem;
    &:nth-child(1){
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        p{
            margin: 0.3rem 0;
            input{
                width: 90%;
                height : 30px;
                border: #eaeaea;
            }

        }
        span{
            display:inline-block;
            width:10%;
            font-weight: 900;
            text-transform: uppercase;
        }
    }

    &:nth-child(2){
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        margin-top: 1rem;

        textarea{
            width: 100%;
            height : 50vh;
            border: #eaeaea;
        }
    }
`;

const ButtonBox = styled.div`
    text-align:center;
    button{
        margin : 0 1rem;
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


export default class NoticeCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            description : '',
            thumbnail : '',
            error : null,
            loading : true,
            errors : []
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(e){
        this.setState({
            title : e.target.value
        });
    }

    handleChange2(e){
        this.setState({
            description : e.target.value
        })
    }
    handleChange3(e){
        this.setState({
            thumbnail : e.target.value
        })
    }
    async handleSubmit(e){
        e.preventDefault();
        return await Axios.post(`/notices`, {
            title : this.state.title,
            description : this.state.description,
            thumbnail : this.state.thumbnail
        }).catch(
            error => error ? console.log(this.props) : '성공! 리스트로 돌아갑니다.'
        ).then(
            this.props.history.goBack()
        )
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                <Ul>
                    <Li>
                        <p>
                            <span>title</span>
                            <input
                                onChange={this.handleChange1}
                                value={this.state.title}
                                placeholder="제목을 입력하세요."
                                required
                            />
                        </p>
                    </Li>
                    <Li>
                        <span>
                            <textarea
                                onChange={this.handleChange2}
                                value={this.state.description}
                                placeholder="본문을 입력하세요."
                                required
                            />
                        </span>
                    </Li>
                    <Li>
                        <span>
                            <input
                                type="file"
                                onChange={this.handleChange3}
                                value={this.state.thumbnail}
                            />
                        </span>
                    </Li>
                </Ul>
                <ButtonBox>
                    <button onClick={()=>this.props.history.goBack()}>뒤로가기</button>
                    <button type="submit">작성완료</button>
                </ButtonBox>
                </form>
            </div>
        )
    }
}
