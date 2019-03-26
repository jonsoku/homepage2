import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const GridItem = styled.div`
    box-shadow:var(--box-shadow);
    background-color: var(--light2);
    transition: all 0.4s;
    position:relative;
    border-top: 10px solid var(--black) ;
    cursor: pointer;

    &:hover{
        transform:scale(1.02);
    }

    &:nth-child(1){
        grid-area: 1 / 1 / 4 / -1;
        position:relative;
        font-size: 1.4rem;


            /*
            첫번째 p태그
            1 : subject, title
            2 : user.name, created_at
            4 : description
            */
        p{
            &:nth-child(1){
                span{
                    font-size:6rem;
                    &::after{
                        position:absolute;
                        content:'FOCUS';
                        font-size: 2rem;
                        background-color: var(--red);
                        color: var(--light);
                        padding: .3rem .8rem;
                        top: 1.2rem;
                        left: 8rem;
                    }

                }
                margin-top: 6.65rem;

            }
            &:nth-child(2){}
            &:nth-child(3){}
        }

        small{
            position:absolute;
            right:-3rem;
            top:1rem;
            background-color: #f9d423;
            color: var(--light);
            width: 6rem;
            height: 6rem;
            line-height: 6rem;
            font-weight:900;
            font-size: 3rem;
            text-align:center;
        }
    }

    /*
    전체 p태그
    1 : subject, title
    2 : user.name, created_at
    4 : description
    */
    p{
        background-color:inherit;
        margin-left: 5px;
        &:nth-child(1){
            span{
                position:absolute;
                left:5px;
                top:5px;
                background-color:inherit;
                font-size:3rem;
            }
            margin-top: 3.5rem;
            text-transform: uppercase;
            font-weight:900;

        }
        &:nth-child(2){
            span{
                background-color:inherit;
                font-size:.7rem;
            }
        }
        &:nth-child(4){
            padding: .8rem;
        }
    }
`;

const PlayerBox = styled.div`
    background-color: inherit;
`;

const CommentsBox = styled.small`
    position:absolute;
    right:-1rem;
    top:1rem;
    background-color: #f9d423;
    color: var(--light);
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-weight:900;
    font-size: 1rem;
    text-align:center;
`;


export default class RenderYoutubes extends Component {
    render() {
    console.log(this.props)
        return this.props.youtubes.map((youtube, index) => (
            <GridItem key={index} onClick={()=>this.props.onShow(youtube.id)}>
                <p><span>{youtube.id}</span>{youtube.title.length > 30 ? youtube.title.substring(0,15) + '...' : youtube.title }</p>
                <p><span>{youtube.user.name}{youtube.created_at}</span></p>
                <PlayerBox  className='player-wrapper'><ReactPlayer className='react-player' url={youtube.url} controls={true} width='100%' height='100%'/></PlayerBox>
                {youtube.youtube_comments.length > 0 ? <CommentsBox>{youtube.youtube_comments.length}</CommentsBox>: '' }
            </GridItem>
        ))
    }
}
