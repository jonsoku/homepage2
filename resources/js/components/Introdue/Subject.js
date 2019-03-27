import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
`;
const Boxes = styled.div`
    transition: all 0.5s;
    box-shadow: 2px 2px 10px silver;
    &:hover {
        transform: scale(1.01);
    }
`;
const Box = styled.div`
    &:not(:first-child) {
        padding: 1rem;
    }

    /* imgage */
    &:nth-child(1) {
        background-color: var(--light2);
        height: 249px;
    }
    /* name-level */
    &:nth-child(2) {
        font-size: 1.4rem;
        span {
            font-weight: 900;
            margin-right: 1rem;
        }
    }
    /* date */
    &:nth-child(3) {
        font-size: 0.7rem;
    }
    /* description */
    &:nth-child(4) {
        font-size: 0.9rem;
        /* overflow-y: scroll; */
    }
    /* price */
    &:nth-child(5) {
        text-align: right;
        color: var(--blue);
    }
`;

export default class Sbject extends Component {
    render() {
        console.log(this.props.userId);
        return (
            <Introduce>
                <Title>LECTURE SUBJECT</Title>
                {this.props && this.props.userId === 1 ? (
                    <div>
                        <Link to="/introduces/subjectsCreate">CREATE</Link>
                    </div>
                ) : (
                    ''
                )}

                <Grid>
                    {this.props.subjects.map((subject, index) => (
                        <Boxes key={index}>
                            {/* nth-child(1) */}
                            <Box>이미지</Box>

                            {/* nth-child(2) */}
                            <Box>
                                <span>{subject.name}</span>[{subject.level}]
                            </Box>
                            {/* nth-child(3) */}
                            <Box>
                                <small>{subject.date}</small>
                            </Box>
                            {/* nth-child(4) */}
                            <Box>
                                {subject.description.length > 40
                                    ? subject.description.substring(0, 40) + '...'
                                    : subject.description}
                            </Box>

                            {/* nth-child(5) */}
                            <Box>{subject.price}</Box>
                        </Boxes>
                    ))}
                </Grid>
            </Introduce>
        );
    }
}
