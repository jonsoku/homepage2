import React, { Component } from 'react'
import Axios from 'axios';
import RenderYoutube from '../Render/RenderYoutube';
import RenderYotubueComments from '../Render/RenderYotubueComments';
import RenderYoutubeCommentForm from '../Render/RenderYoutubeCommentForm';

export default class YoutubeShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            youtube : [],
            youtubeComments : [],
            loading : true,
            body: ''
        }
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
    }

    handleChangeBody(e){
        this.setState({
            body : e.target.value
        })
    }

    async handleCommentSubmit(e){
        e.preventDefault();
        return await Axios.post(`/youtubes/${this.props.match.params.id}/youtubeComments`,{
            body : this.state.body
        }).catch(
            error => console.log(error)
        ).then(
            this._getYoutube()
        )
    }

    async _getYoutube(){
        return await Axios.get(`/youtubes/${this.props.match.params.id}`).then(response => this.setState({
            youtube : response.data.youtube,
            youtubeComments : [...response.data.youtubeComments],
            loading : false
        })).catch(
            error => console.log(error)
        )
    }

    componentDidMount(){
        this._getYoutube();
    }

    render() {
        return (
        <div className="container">
            <RenderYoutube youtube={this.state.youtube}/>
            <RenderYoutubeCommentForm onCommentSubmit={this.handleCommentSubmit} onChangeBody={this.handleChangeBody} body={this.state.body}/>
            <RenderYotubueComments youtubeComments={this.state.youtubeComments}/>

        </div>
        )
    }
    }
