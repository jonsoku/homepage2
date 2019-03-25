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
    }



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
        return (
        <div className="container">
            <RenderNotice notice={this.state.notice} onDelete={this.handleDelete} onEdit={this.handleEdit}/>
            <RenderNoticeCommentForm commentSubmit={this.handleSubmit} commentChangeBody={this.handleChangeBody} body={this.state.body}/>
            <RenderNoticeComments noticeComments={this.state.noticeComments} user={this.state.user}/>
        </div>
        )
    }
}
