import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const GridBox = styled.div`
    margin-top: 5rem;
    display:grid;
    grid-template-columns : repeat(12, 1fr);
    grid-auto-rows: 100px;
    padding: 1.1rem;
    background-color: var(--grey);
    box-shadow : var(--box-shadow);
    position:relative;

    &::before{
        padding: 1.1rem;
        position:absolute;
        content: 'Lecture';
        left:0;
        top:-2rem;
        background-color:var(--black);
        color:var(--light);
        padding: .5rem 1rem;
    }
`;

const Box = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    word-break : break-all;

    /*Youtube*/
    &:first-child{
        grid-area : 1 / 1 / 9 / 10;
    }

    /*제목*/
    &:nth-child(2){
        grid-area : 1 / 10 / 3 / -1;
        font-size: 1rem;
        p{
            display:block;
            font-size: 1.3rem;
            font-weight: 900;
        }

    }
    /*작성자*/
    &:nth-child(3){
        grid-area : 3 / 10 / 4 / -1;
    }
    /*과목*/
    &:nth-child(4){
        grid-area : 4 / 10 / 5 / -1;


    }
    /*내용*/
    &:nth-child(5){
        grid-area : 5 / 10 / 9 / -1;
        overflow-y:scroll;

    }
`;


export default class RenderYoutube extends Component {
    render() {
        return (
        <GridBox>
            <Box className="player-wrapper">
                <ReactPlayer className="react-player" url={this.props.youtube.url} controls={true} width="100%" height="100%"/>
            </Box>

            <Box>
                <p>{this.props.youtube.title}</p>
            </Box>

            <Box>
                <i className="fas fa-user-edit"></i><p>{this.props.youtube.user && this.props.youtube.user.name}</p>
            </Box>

            <Box>
                <i className="fas fa-book"></i>{this.props.youtube.subject}
            </Box>

            <Box>
                {this.props.youtube.description}
            </Box>
        </GridBox>
        )
    }
}
