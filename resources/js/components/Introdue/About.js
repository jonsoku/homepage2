import React, { Component } from 'react';
import styled from 'styled-components';

const Introduce = styled.div`
    font-family: 'Busan';
    margin-top: 3rem;
    margin-bottom: 12rem;

    p {
        text-align: center;
        padding: 2rem 0;
        border-bottom: 1px solid #eaeaea;
    }
`;

const Grid = styled.div`
    margin-top: 8rem;
    display: grid;
    grid-template-columns: 10% 40% 40% 10%;
`;

const Box = styled.div`
    /*사진*/
    &:nth-child(2) {
        padding: 4rem;
        background: url('http://kimschool.online/img/mainimg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    /*설명*/
    &:nth-child(3) {
        padding: 3rem;
    }
`;

const Ul = styled.div``;
const Li = styled.div`
    margin: 2rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eaeaea;
    small {
        font-weight: 900;
        display: inline-block;
        width: 20%;
    }
    span {
        display: inline-block;
        width: 80%;
    }
`;
export default class about extends Component {
    render() {
        return (
            <Introduce>
                <p>ABOUT 김스쿨</p>
                <Grid>
                    <Box />
                    <Box />
                    <Box>
                        <Ul>
                            <Li>
                                <small>Name</small>
                                <span>KIMSCHOOL : 김스쿨</span>
                            </Li>
                            <Li>
                                <small>Moto</small>
                                <span>실전성을 키우자 !</span>
                            </Li>
                            <Li>
                                <small>Plan</small>
                                <span>일본 IT 쉼터</span>
                            </Li>
                        </Ul>
                    </Box>
                    <Box />
                </Grid>
            </Introduce>
        );
    }
}
