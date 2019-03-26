import React, { Component } from 'react';
import Axios from 'axios';
import RenderYoutube from '../Render/RenderYoutube';
import RenderYotubueComments from '../Render/RenderYotubueComments';
import RenderYoutubeCommentForm from '../Render/RenderYoutubeCommentForm';
import RenderYoutubeCommentEditForm from '../Render/RenderYoutubeCommentEditForm';

export default class YoutubeShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youtube: [],
            youtubeComments: [],
            loading: true,
            body: '',
            editId: '',
            EditBody: '',
            editing: false
        };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);

        this.handleChangeEditBody = this.handleChangeEditBody.bind(this);
        this.handleCommentEditSubmit = this.handleCommentEditSubmit.bind(this);
        this.handleEditingMode = this.handleEditingMode.bind(this);

        this.handleCommentDelete = this.handleCommentDelete.bind(this);
    }

    //댓글 삭제
    handleCommentDelete(id) {
        Axios.delete(`/youtubes/${this.props.match.params.id}/youtubeComments/${id}`).then(this._getYoutube());
    }

    //댓글 삭제 끝

    //댓글 수정

    handleEditingMode(id) {
        console.log(id);
        this.setState({
            editing: true,
            editId: id
        });
    }

    handleChangeEditBody(e) {
        this.setState({
            EditBody: e.target.value
        });
    }

    async handleCommentEditSubmit(e) {
        e.preventDefault();
        return await Axios.put(`/youtubes/${this.props.match.params.id}/youtubeComments/${this.state.editId}`, {
            body: this.state.EditBody
        })
            .catch(error => console.log(error))
            .then(
                this.setState({
                    EditBody: '',
                    editing: false
                })
            )
            .then(this._getYoutube());
    }
    //댓글 수정 끝

    //댓글 생성

    handleChangeBody(e) {
        this.setState({
            body: e.target.value
        });
    }

    async handleCommentSubmit(e) {
        e.preventDefault();
        return await Axios.post(`/youtubes/${this.props.match.params.id}/youtubeComments`, {
            body: this.state.body
        })
            .catch(error => console.log(error))
            .then(
                this.setState({
                    body: ''
                })
            )
            .then(this._getYoutube());
    }
    //댓글 생성 끝

    async _getYoutube() {
        return await Axios.get(`/youtubes/${this.props.match.params.id}`)
            .then(response =>
                this.setState({
                    youtube: response.data.youtube,
                    youtubeComments: [...response.data.youtubeComments],
                    loading: false
                })
            )
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this._getYoutube();
    }

    render() {
        return (
            <div className="container">
                <RenderYoutube youtube={this.state.youtube} />
                {this.state.editing ? (
                    <RenderYoutubeCommentEditForm
                        handleChangeEditBody={this.handleChangeEditBody}
                        handleCommentEditSubmit={this.handleCommentEditSubmit}
                        EditBody={this.state.EditBody}
                    />
                ) : (
                    <RenderYoutubeCommentForm
                        onCommentSubmit={this.handleCommentSubmit}
                        onChangeBody={this.handleChangeBody}
                        body={this.state.body}
                    />
                )}
                <RenderYotubueComments
                    youtubeComments={this.state.youtubeComments}
                    editing={this.state.editing}
                    handleEditingMode={this.handleEditingMode}
                    handleCommentDelete={this.handleCommentDelete}
                />
            </div>
        );
    }
}
