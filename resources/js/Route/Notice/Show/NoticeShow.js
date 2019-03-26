import React, { Component } from 'react'
import Axios from 'axios';
import RenderNotice from '../Render/RenderNotice';
import RenderNoticeComments from '../Render/RenderNoticeComments';
import RenderNoticeCommentForm from '../Render/RenderNoticeCommentForm';

export default class NoticeShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            notice : [],
            noticeComments : [],
            user : [],
            loading : true,
            body : ''
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCommentDelete = this.handleCommentDelete.bind(this);

        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleChangeBody2 = this.handleChangeBody2.bind(this);
    }

    handleCommentDelete(id){
        Axios.delete(`/notices/${this.state.notice.id}/noticeComments/${id}`).catch(
            error => console.log(error)
        ).then(
            this._getNotice()
        )
    }

    /* 댓글 수정 */
    async handleSubmit2(e, id){
        e.preventDefault();
        return await Axios.put(`/notices/${this.state.notice.id}/noticeComments/${id}`,{
            body : this.state.body
        }).catch(
            error => console.log(error,'handlesubmit')
        ).then(
            this.setState({
                body : ''
            }),
            this._getNotice(),
            console.log(id)
        )
    }

    handleChangeBody2(e){
        this.setState({
            body : e.target.value
        })
    }

    /* 댓글 수정 끝 */

    /* 댓글 생성 */
    async handleSubmit(e){
        e.preventDefault();
        return await Axios.post(`/notices/${this.state.notice.id}/noticeComments`,{
            body : this.state.body
        }).catch(
            error => console.log(error,'handlesubmit')
        ).then(
            this.setState({
                body : ''
            }),
            this._getNotice()

        )
    }

    handleChangeBody(e){
        this.setState({
            body : e.target.value
        })
    }
    /* 댓글 생성 끝*/


    handleDelete(id){
        Axios.delete(`/notices/${id}`).catch(
            error => console.log(error)
        ).then(
            alert(`${id}번 게시물이 삭제되었습니다. `),
            this.props.history.push('/notices'),
            console.log(`${id}번 게시물 삭제 성공! - handleDelete`)
        )
    }

    handleEdit(id){
        this.props.history.push(`/notices/${id}/edit`)
    }


    async _getNotice(){
        return await Axios.get(`/notices/${this.props.match.params.id}`)
        .catch(
            error => console.log(error)
        )
        .then(response =>
            this.setState({
                notice : response.data.notice,
                noticeComments : [...response.data.noticeComments],
                user : response.data.user,
                loading : false
            })
        )
    }

    componentDidMount(){
        this._getNotice();
    }

    render() {
        console.log(this.props)
        return (
        <div className="container">
            <RenderNotice notice={this.state.notice} onDelete={this.handleDelete} onEdit={this.handleEdit} id={this.state.user && this.state.user.id}/>
            <RenderNoticeCommentForm commentSubmit={this.handleSubmit} commentChangeBody={this.handleChangeBody} body={this.state.body} id={this.state.user && this.state.user.id}/>
            <RenderNoticeComments noticeComments={this.state.noticeComments} id={this.state.user && this.state.user.id} onCommentDelete={this.handleCommentDelete} url={this.props.match.url} />
        </div>
        )
    }
}
