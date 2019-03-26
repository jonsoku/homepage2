import React, { Component } from 'react'
import Axios from 'axios';
import RenderNotices from './Render/RenderNotices';

export default class Notice extends Component {

    constructor(props){
        super(props);
        this.state = {
            notices : [],
            user : [],
            loading : true
        }
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(){
        this.props.history.push('/notices/create')
    }

    async _getNotices(){
        return await Axios.get(`/notices`)
        .catch(
            error => console.log(error)
        )
        .then(
            response => this.setState({
                notices : [...response.data.notices],
                user : response.data.user,
                loading : false
            })
        )
    }

    componentDidMount(){
        this._getNotices();
    }

    render() {
        console.log(this.state)
        return (
        <div className="container">
            <RenderNotices notices={this.state.notices} onCreate={this.handleCreate} id={this.state.user && this.state.user.id}/>
        </div>
        )
    }
}
