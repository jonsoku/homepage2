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
        div{
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


export default class YoutubeCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            subject : '',
            title : '',
            url : '',
            description : '',
            error : null,
            loading : true,
            errors : []
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(e){
        this.setState({
            subject : e.target.value
        });
    }

    handleChange2(e){
        this.setState({
            title : e.target.value
        })
    }
    handleChange3(e){
        this.setState({
            url : e.target.value
        })
    }
    handleChange4(e){
        this.setState({
            description : e.target.value
        })
    }
    async handleSubmit(e){
        e.preventDefault();
        return await Axios.post(`/youtubes`, {
            subject : this.state.subject,
            title : this.state.title,
            url : this.state.url,
            description : this.state.description,
        }).catch(
            error => error ? console.log(this.props) : '성공! 리스트로 돌아갑니다.'
        ).then(
            this.props.history.goBack()
        )
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                <Ul>
                    <Li>
                        <div>
                            <span>subject</span>
                            <input
                                onChange={this.handleChange1}
                                value={this.state.subject}
                                placeholder="과목을 입력하세요."
                                required
                            />

                        </div>
                        <div>
                            <span>title</span>
                            <input
                                onChange={this.handleChange2}
                                value={this.state.title}
                                placeholder="제목을 입력하세요."
                                required
                            />

                        </div>
                        <div>
                            <span>url</span>
                            <input
                                onChange={this.handleChange3}
                                value={this.state.url}
                                placeholder="YOUTUBE URL을 입력하세요."
                                required
                            />
                        </div>
                    </Li>
                    <Li>
                        <span>
                            <textarea
                                onChange={this.handleChange4}
                                value={this.state.description}
                                placeholder="본문을 입력하세요."
                                required
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
