import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Introduce = styled.div`
    font-family: 'Busan';
    margin-top: 3rem;
`;

const Title = styled.p`
    text-align: center;
    padding: 2rem 0;
    border-bottom: 1px solid #eaeaea;
`;
const StudentChartBox = styled.div`
    padding-top: 5rem;
`;
const StudentChart = styled.div`
    background: url('img/Introduce/with.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
`;

export default class With extends Component {
    render() {
        return (
            <Introduce>
                <Title>WITH</Title>
                <StudentChartBox>
                    <div>
                        <p>일본 내 연계회사</p>
                        <StudentChart />
                    </div>
                </StudentChartBox>
            </Introduce>
        );
    }
}
