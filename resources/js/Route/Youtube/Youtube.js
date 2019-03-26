import React, { Component } from 'react'
import Axios from 'axios';
import RenderYoutubes from './Render/RenderYoutubes';
import styled from 'styled-components';

const SearchBox = styled.div`
    margin: 3rem 0;
    input{
        width: 100%;
        height: 39px;
        font-size: 1.3rem;
    }
`;


const GridBox = styled.div`
    display: grid;
    grid-template-columns : repeat(4, minmax(210px, 1fr));
    grid-gap: 50px;

`;


const ButtonBox = styled.div`
    margin-top: 3rem;
    button{
        width: 100%;
        border : 0;
        background-color:var(--black);
        color: var(--light);
        height:39px;
        font-size:1.2rem;
        letter-spacing: 3px;
    }
`;


export default class Youtube extends Component {
    constructor(props){
        super(props);
        this.state = {
            youtubes : [],
            user : [],
            loading : true,
            keyword : "",
        }
        this.handleChangeKeyword = this.handleChangeKeyword.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleShow(id){
        this.props.history.push(`/youtubes/${id}`)
    }

    handleChangeKeyword(e){
        this.setState({
            keyword : e.target.value
        })
    }

    handleCreate(){
        this.props.history.push('/youtubes/create')
    }

    async _getYoutube(){
        return await Axios.get(`/youtubes`).then(response => this.setState({
            youtubes : [...response.data.youtubes],
            user : response.data.user,

        })).catch(
            error => console.log(error)
        ).then(
            this.setState({
                loading : false
            })
        )
    }

    componentDidMount(){
        this._getYoutube();
    }

    render() {
        console.log(this.props, 'props');

        return (
            <div className="container">
                {this.state.user.id === 1
                ? (
                <ButtonBox>
                    <button onClick={()=>this.handleCreate()}>영상업로드</button>
                </ButtonBox>
                )
                : (
                    ''
                )}

                <SearchBox>
                    <input value={this.state.keyword}
                    onChange={this.handleChangeKeyword}
                    placeholder="강의 제목을 입력해주세요 .. "
                    />
                </SearchBox>
                <GridBox>
                    <RenderYoutubes youtubes={this.state.youtubes.filter(
                        youtube => youtube.title.indexOf(this.state.keyword) > -1
                    )} onShow={this.handleShow}/>
                </GridBox>

            </div>
        )
    }
}
