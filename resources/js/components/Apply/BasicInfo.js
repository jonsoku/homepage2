import React, { Component } from 'react';
import styled from 'styled-components';
const Container = styled.div`
    width: 50%;
    margin: 0 auto;
`;
const Form = styled.div`
    margin-top: 4rem;
`;
const GenderBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
`;

const Gender = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        width: 70%;
        height: 79px;
        font-size: 1.2rem;
        border: 0;
        box-shadow: var(--box-shadow);
        text-align: center;
        border-radius: 30px;
    }
    margin-bottom: 3rem;
`;
const Age = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    &:checked {
        transform: scale(0.9);
    }
    input {
        width: 70%;
        height: 79px;
        font-size: 1.2rem;
        border: 0;
        box-shadow: var(--box-shadow);
        text-align: center;
        border-radius: 30px;
    }
    margin-bottom: 5rem;
`;

const ButtonBox = styled.div`
    text-align: center;
    button {
        border: 0;
        font-size: 1.2rem;
    }
`;

export default class BasicInfo extends Component {
    render() {
        return (
            <Container>
                <Form action="">
                    <GenderBox>
                        <Gender>
                            <label htmlFor="apply-form-name-male">남자</label>
                            <input
                                id="apply-form-name-male"
                                type="radio"
                                name="genderGroup"
                                value="male"
                                onChange={this.props.handleChangeGender}
                            />
                        </Gender>
                        <Gender>
                            <label htmlFor="apply-form-name-female">여자</label>
                            <input
                                id="apply-form-name-female"
                                type="radio"
                                name="genderGroup"
                                value="female"
                                onChange={this.props.handleChangeGender}
                            />
                        </Gender>
                    </GenderBox>
                    <Name>
                        <input
                            placeholder="이름을 입력해주세요."
                            onChange={this.props.handleChangeName}
                            value={this.props.basicInfo.name}
                        />
                    </Name>
                    <Age>
                        <input
                            type="number"
                            placeholder="나이를 입력해주세요. (만)"
                            onChange={this.props.handleChangeAge}
                            value={this.props.basicInfo.age}
                        />
                    </Age>

                    <ButtonBox>
                        <button onClick={() => this.props.handleNext()}>Next</button>
                    </ButtonBox>
                </Form>
            </Container>
        );
    }
}
