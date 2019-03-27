import React, { Component } from 'react';
import About from '../../components/Introdue/About';
import Char from '../../components/Introdue/Char';
import Subject from '../../components/Introdue/Subject';
import Axios from 'axios';
import SubjectCreateForm from '../../components/Introdue/SubjectCreateForm';
import Student from '../../components/Introdue/Student';
import With from '../../components/Introdue/With';

export default class Introduce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            user: []
        };
    }

    async _getSubjects() {
        return await Axios.get(`/subjects`).then(response =>
            this.setState({
                subjects: [...response.data.subjects],
                user: response.data.user
            })
        );
    }

    componentDidMount() {
        this._getSubjects();
    }

    render() {
        return (
            <div className="container">
                <About />
                <Char />
                <Subject subjects={this.state.subjects} userId={this.state.user && this.state.user.id} />
                <Student />
                <With />
            </div>
        );
    }
}
