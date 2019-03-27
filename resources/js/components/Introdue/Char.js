import React, { Component } from 'react';
import styled from 'styled-components';

const Introduce = styled.div`
    font-family: 'Busan';
    margin-top: 3rem;
    margin-bottom: 12rem;
`;

const Title = styled.p`
    text-align: center;
    padding: 2rem 0;
    border-bottom: 1px solid #eaeaea;
`;

const Grid = styled.div`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 100px;
    grid-gap: 50px;
`;

const Box = styled.div`
    transition: all 0.5s;
    &:nth-child(1) {
        grid-area: 1 / 1 / 4 / 4;
    }
    &:nth-child(2) {
        grid-area: 1 / 4 / 4 / 7;
    }
    &:nth-child(3) {
        grid-area: 1 / 7 / 4 / 10;
    }
    &:last-child {
        grid-area: 1 / 10 / 4 / 13;
    }
    &:hover {
        transform: scale(1.05);
    }
`;

const SubTitle = styled.p`
    font-size: 0.8rem;
    font-weight: 900;
    text-align: center;
    position: relative;
    /* &::after {
        content: '';
        position: absolute;
        bottom: -1.3rem;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 3px;
        background-color: var(--black);
    } */
`;

const Ul = styled.ul`
    margin-top: 2.5rem;
`;
const Li = styled.li`
    text-align: center;
`;
const IconBox = styled.div`
    display: inline-block;
    background-color: var(--black);
    width: 100px;
    height: 100px;
    line-height: 121px;
    border-radius: 50%;
    i {
        background-color: inherit;
        color: var(--light);
        font-size: 3rem;
    }
`;
const SubDesc = styled.p`
    margin-top: 3rem;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    font-family: 'S-CoreDream-3Light';
    line-height: 2rem;
`;

export default class Char extends Component {
    render() {
        return (
            <Introduce>
                <Title>OUR STYLE</Title>
                <Grid>
                    <Box>
                        <SubTitle>전문성</SubTitle>
                        <Ul>
                            <Li>
                                <IconBox>
                                    <i className="fas fa-graduation-cap" />
                                </IconBox>

                                <SubDesc>
                                    일본IT업계의 테스터부터 <br />
                                    리더까지의 경험을 갖춘 <br />
                                    한국 강사 출신 일본 WEB개발
                                    <br />
                                    7년차 개발자가 <br />
                                    일본 IT의 WEB기술을 <br />
                                    심도 있게 지도 및 관리합니다.
                                </SubDesc>
                            </Li>
                        </Ul>
                    </Box>
                    <Box>
                        <SubTitle>비용 및 기간</SubTitle>
                        <Ul>
                            <Li>
                                <IconBox>
                                    <i className="fas fa-yen-sign" />
                                </IconBox>
                                <SubDesc>
                                    일본IT업계의 테스터부터 리더까지의 경험을 갖춘 한국 강사 출신 일본 WEB개발 7년차
                                    개발자가 일본 IT의 WEB기술을 심도 있게 지도 및 관리합니다.
                                </SubDesc>
                            </Li>
                        </Ul>
                    </Box>
                    <Box>
                        <SubTitle>무료강의</SubTitle>
                        <Ul>
                            <Li>
                                <IconBox>
                                    <i className="fab fa-youtube" />
                                </IconBox>
                                <SubDesc>
                                    수업에 참석하지 못한 수강생
                                    <br /> 한번 더 강의를 듣고 싶은 수강생에게 <br />
                                    무료로 제공되는 김스쿨 강의영상 <br />
                                    이제 어디서든 학습이 가능하도록 <br />
                                    매수업 영상을 평생무료제공
                                </SubDesc>
                            </Li>
                        </Ul>
                    </Box>
                    <Box>
                        <SubTitle>사후관리</SubTitle>
                        <Ul>
                            <Li>
                                <IconBox>
                                    <i className="fas fa-tasks" />
                                </IconBox>
                                <SubDesc>
                                    일본IT업계의 테스터부터 리더까지의 경험을 갖춘 한국 강사 출신 일본 WEB개발 7년차
                                    개발자가 일본 IT의 WEB기술을 심도 있게 지도 및 관리합니다.
                                </SubDesc>
                            </Li>
                        </Ul>
                    </Box>
                </Grid>
            </Introduce>
        );
    }
}
