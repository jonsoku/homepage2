import React, { Component } from 'react';
import BasicInfo from '../../components/Apply/BasicInfo';
import SubjectInfo from '../../components/Apply/SubjectInfo';
import Success from '../../components/Apply/Success';
import Axios from 'axios';

export default class Apply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 2,
            basicInfo: {
                name: '',
                gender: '',
                age: '',
                java: '',
                java2: '',
                java3: '',
                web: '',
                web2: '',
                web3: ''
            }
        };
        //case 1
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);

        //case2
        this.handleChangeJava = this.handleChangeJava.bind(this);
        this.handleChangeJava2 = this.handleChangeJava2.bind(this);
        this.handleChangeJava3 = this.handleChangeJava3.bind(this);
        this.handleChangeWeb = this.handleChangeWeb.bind(this);
        this.handleChangeWeb2 = this.handleChangeWeb2.bind(this);
        this.handleChangeWeb3 = this.handleChangeWeb3.bind(this);
        this.handleSubmitBasicInfo = this.handleSubmitBasicInfo.bind(this);

        //nextbutton
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    //case2

    handleChangeJava(e) {
        console.log(e.target.checked);

        e.target.checked
            ? this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      java: e.target.name
                  }
              })
            : this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      java: ''
                  }
              });
    }
    handleChangeJava2(e) {
        console.log(e.target.checked);

        e.target.checked
            ? this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      java2: e.target.name
                  }
              })
            : this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      java2: ''
                  }
              });
    }
    handleChangeJava3(e) {
        console.log(e.target.checked);

        e.target.checked
            ? this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      java3: e.target.name
                  }
              })
            : this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      java3: ''
                  }
              });
    }

    handleChangeWeb(e) {
        console.log(e.target.checked);

        e.target.checked
            ? this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      web: e.target.name
                  }
              })
            : this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      web: ''
                  }
              });
    }
    handleChangeWeb2(e) {
        console.log(e.target.checked);

        e.target.checked
            ? this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      web2: e.target.name
                  }
              })
            : this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      web2: ''
                  }
              });
    }
    handleChangeWeb3(e) {
        console.log(e.target.checked);

        e.target.checked
            ? this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      web3: e.target.name
                  }
              })
            : this.setState({
                  basicInfo: {
                      ...this.state.basicInfo,
                      web3: ''
                  }
              });
    }

    async handleSubmitBasicInfo(e) {
        e.preventDefault();
        return await Axios.post('/applies', {
            name: this.state.basicInfo.name,
            age: this.state.basicInfo.age,
            gender: this.state.basicInfo.gender,
            java: this.state.basicInfo.java,
            java2: this.state.basicInfo.java2,
            java3: this.state.basicInfo.java3,
            web: this.state.basicInfo.web,
            web2: this.state.basicInfo.web2,
            web3: this.state.basicInfo.web3
        })
            .catch(error =>
                error
                    ? this.setState({
                          step: 1
                      })
                    : ''
            )
            .then(this.handleNext());
    }

    //case1
    handleChangeName(e) {
        this.setState({
            basicInfo: {
                ...this.state.basicInfo,
                name: e.target.value
            }
        });
    }
    handleChangeAge(e) {
        this.setState({
            basicInfo: {
                ...this.state.basicInfo,
                age: e.target.value
            }
        });
    }
    handleChangeGender(e) {
        this.setState({
            basicInfo: {
                ...this.state.basicInfo,
                gender: e.target.value
            }
        });
    }

    handleNext() {
        this.setState({
            step: this.state.step + 1
        });
    }
    handlePrev() {
        this.setState({
            step: this.state.step - 1
        });
    }

    render() {
        console.log(this.state.basicInfo);
        {
            switch (this.state.step) {
                case 1:
                    return (
                        <div className="container">
                            <BasicInfo
                                handleChangeName={this.handleChangeName}
                                handleChangeAge={this.handleChangeAge}
                                handleChangeGender={this.handleChangeGender}
                                handleNext={this.handleNext}
                                basicInfo={this.state.basicInfo}
                            />
                        </div>
                    );
                case 2:
                    return (
                        <div className="container">
                            <SubjectInfo
                                handleChangeJava={this.handleChangeJava}
                                handleChangeJava2={this.handleChangeJava2}
                                handleChangeJava3={this.handleChangeJava3}
                                handleChangeWeb={this.handleChangeWeb}
                                handleChangeWeb2={this.handleChangeWeb2}
                                handleChangeWeb3={this.handleChangeWeb3}
                                handleSubmitBasicInfo={this.handleSubmitBasicInfo}
                                handleNext={this.handleNext}
                                basicInfo={this.state.basicInfo}
                                handlePrev={this.handlePrev}
                            />
                        </div>
                    );
                case 3:
                    return (
                        <div className="container">
                            <Success />
                        </div>
                    );
                case 4:
                    alert('빠진항목이있어요');
                    return (
                        <div className="container">
                            <BasicInfo
                                handleChangeName={this.handleChangeName}
                                handleChangeAge={this.handleChangeAge}
                                handleChangeGender={this.handleChangeGender}
                                handleNext={this.handleNext}
                                basicInfo={this.state.basicInfo}
                            />
                        </div>
                    );
            }
        }
    }
}
