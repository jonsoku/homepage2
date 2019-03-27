import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 0.9s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;
const Form = styled.form`
    margin-top: 5rem;
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
const Box = styled.div``;
const Java1 = styled.div`
    display: inline-block;
    > input {
        opacity: 0;
    }
    > input + label {
        position: relative; /* permet de positionner les pseudo-éléments */
        padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
        cursor: pointer; /* affiche un curseur adapté */
        &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 1px;
            width: 17px;
            height: 17px; /* dim. de la case */
            border: 1px solid #aaa;
            background: #f8f8f8;
            border-radius: 3px; /* angles arrondis */
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3); /* légère ombre interne */
        }
        &:after {
            content: '✔';
            position: absolute;
            top: -1px;
            left: 2px;
            font-size: 16px;
            color: #09ad7e;
            transition: all 0.2s; /* on prévoit une animation */
        }
    }
    > input:not(:checked) + label {
        &:after {
            opacity: 0; /* coche invisible */
            transform: scale(0); /* mise à l'échelle à 0 */
        }
    }
    > input:disabled:not(:checked) + label {
        &:before {
            box-shadow: none;
            border-color: #bbb;
            background-color: #ddd;
        }
    }
    > input:checked + label {
        &:after {
            opacity: 1; /* coche opaque */
            transform: scale(1); /* mise à l'échelle 1:1 */
        }
    }
    > input:disabled:checked + label {
        &:after {
            color: #999;
        }
    }
    > input:disabled + label {
        color: #aaa;
    }
    > input:checked:focus + label,
    input:not(:checked):focus + label {
        &:before {
            border: 1px dotted blue;
        }
    }
`;

export default class SubjectInfo extends Component {
    render() {
        return (
            <>
                <Rotate>&lt; 💅 &gt;</Rotate>
                <Form onSubmit={this.props.handleSubmitBasicInfo}>
                    <Grid>
                        <Box>
                            <Java1>
                                <label htmlFor="apply-form-java-1">
                                    <span>자바 기초</span>
                                </label>
                                <input
                                    id="apply-form-java-1"
                                    type="checkbox"
                                    onChange={this.props.handleChangeJava}
                                    name="자바 기초"
                                    value={this.props.basicInfo.java}
                                />
                            </Java1>
                            <div>
                                <label htmlFor="apply-form-java-2">자바 중급</label>
                                <input
                                    id="apply-form-java-2"
                                    type="checkbox"
                                    onChange={this.props.handleChangeJava2}
                                    name="자바 중급"
                                    value={this.props.basicInfo.java2}
                                />
                            </div>
                            <div>
                                <label htmlFor="apply-form-java-3">자바 고급</label>
                                <input
                                    id="apply-form-java-3"
                                    type="checkbox"
                                    onChange={this.props.handleChangeJava3}
                                    name="자바 고급"
                                    value={this.props.basicInfo.java3}
                                />
                            </div>
                        </Box>
                        <Box>
                            <label htmlFor="apply-form-web-1">웹 기초</label>
                            <input
                                id="apply-form-web-1"
                                type="checkbox"
                                onChange={this.props.handleChangeWeb}
                                name="웹 기초"
                                value={this.props.basicInfo.web}
                            />
                            <label htmlFor="apply-form-web-2">웹 중급</label>
                            <input
                                id="apply-form-web-2"
                                type="checkbox"
                                onChange={this.props.handleChangeWeb2}
                                name="웹 중급"
                                value={this.props.basicInfo.web2}
                            />
                            <label htmlFor="apply-form-web-3">웹 고급</label>
                            <input
                                id="apply-form-web-3"
                                type="checkbox"
                                onChange={this.props.handleChangeWeb3}
                                name="웹 고급"
                                value={this.props.basicInfo.web3}
                            />
                        </Box>
                    </Grid>
                    <button onClick={() => this.props.handlePrev()}>Prev</button>
                    <button type="submit">Next</button>
                </Form>
            </>
        );
    }
}
