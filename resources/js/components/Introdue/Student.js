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
    background: url('img/Introduce/Student.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
`;

export default class Student extends Component {
    render() {
        return (
            <Introduce>
                <Title>OUTPUT</Title>
                <StudentChartBox>
                    <div>
                        <p>김스쿨 속성반 1기 (2018 . 10 ~ 2019. 1)</p>
                        <StudentChart />
                    </div>
                </StudentChartBox>
            </Introduce>
        );
    }
}
