import React, { Component } from 'react';
import Axios from 'axios';
import RenderNotice from '../Render/RenderNotice';
import RenderNoticeComments from '../Render/RenderNoticeComments';
import RenderNoticeCommentForm from '../Render/RenderNoticeCommentForm';

export default class NoticeShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notice: [],
            noticeComments: [],
            user: [],
            loading: true,
            body: '',
            editing: false,
            EditBody: '',
            commentId: ''
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCommentDelete = this.handleCommentDelete.bind(this);

        this.handleSubmit2 = this.handleSubmit2.bind(this);

        this.handleEditing = this.handleEditing.bind(this);
        this.handleEditingChange = this.handleEditingChange.bind(this);
    }
    //

    async handleSubmit2(e) {
        e.preventDefault();
        return await Axios.put(`${this.props.match.url}/noticeComments/${this.state.commentId}`, {
            body: this.state.EditBody
        })
            .catch(error => console.log(error))
            .then(
                this.setState({
                    EditBody: '',
                    editing: false
                }),
                this._getNotice()
            );
    }

    handleEditingChange(e) {
        this.setState({
            EditBody: e.target.value
        });
    }

    handleEditing(id) {
        console.log(id, 'handleediting');
        this.setState({
            editing: true,
            commentId: id
        });

        console.log(this.state, 'handleediting');
    }

    //

    handleCommentDelete(id) {
        Axios.delete(`/notices/${this.state.notice.id}/noticeComments/${id}`)
            .catch(error => console.log(error))
            .then(this._getNotice());
    }

    /* 댓글 생성 */
    async handleSubmit(e) {
        e.preventDefault();
        return await Axios.post(`/notices/${this.state.notice.id}/noticeComments`, {
            body: this.state.body
        })
            .catch(error => console.log(error, 'handlesubmit'))
            .then(
                this.setState({
                    body: ''
                }),
                this._getNotice()
            );
    }

    handleChangeBody(e) {
        this.setState({
            body: e.target.value
        });
    }
    /* 댓글 생성 끝*/

    handleDelete(id) {
        Axios.delete(`/notices/${id}`)
            .catch(error => console.log(error))
            .then(
                alert(`${id}번 게시물이 삭제되었습니다. `),
                this.props.history.push('/notices'),
                console.log(`${id}번 게시물 삭제 성공! - handleDelete`)
            );
    }

    handleEdit(id) {
        this.props.history.push(`/notices/${id}/edit`);
    }

    async _getNotice() {
        return await Axios.get(`/notices/${this.props.match.params.id}`)
            .catch(error => console.log(error))
            .then(response =>
                this.setState({
                    notice: response.data.notice,
                    noticeComments: [...response.data.noticeComments],
                    user: response.data.user,
                    loading: false
                })
            );
    }

    componentDidMount() {
        this._getNotice();
    }

    render() {
        console.log(this.props.match.url, 'noticeshow');
        return (
            <div className="container">
                <RenderNotice
                    notice={this.state.notice}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}
                    id={this.state.user && this.state.user.id}
                />{' '}
                {this.state.editing ? (
                    ''
                ) : (
                    <RenderNoticeCommentForm
                        commentSubmit={this.handleSubmit}
                        commentChangeBody={this.handleChangeBody}
                        body={this.state.body}
                        id={this.state.user && this.state.user.id}
                    />
                )}{' '}
                <RenderNoticeComments
                    noticeComments={this.state.noticeComments}
                    id={this.state.user && this.state.user.id}
                    onCommentDelete={this.handleCommentDelete}
                    url={this.props.match.url}
                    editing={this.state.editing}
                    handleEditing={this.handleEditing}
                    handleEditingChange={this.handleEditingChange}
                    EditBody={this.state.EditBody}
                    handleSubmit2={this.handleSubmit2}
                />{' '}
            </div>
        );
    }
}
