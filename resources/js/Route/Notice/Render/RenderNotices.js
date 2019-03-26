import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Table = styled.table`
    width: 100%;
    text-align: center;
    caption {
        margin-top: 3rem;
    }
    tr {
        height: 39px;
        line-height: 39px;
    }
`;
const Thead = styled.thead`
    font-weight: 900;
`;
const TheadBox = styled.tr`
    th:nth-child(1) {
        width: 5%;
    }
    th:nth-child(2) {
        width: 60%;
    }
    th:nth-child(3) {
        width: 10%;
    }
    th:nth-child(4) {
        width: 30%;
    }
`;
const Tbody = styled.tbody``;
const TbodyBox = styled.tr`
    td:nth-child(1) {
    }
    td:nth-child(2) {
        text-align: left;
        a {
            margin-left: 3rem;
            display: block;
        }
    }
    td:nth-child(3) {
    }
    td:nth-child(4) {
    }
`;

const Title = styled.td`
    transition: all 0.6s;
    &:hover {
        transform: scale(1.01);
    }
`;

const Comment = styled.span`
    margin-left: 1.5rem;
    background-color: #ffbc42;
    color: var(--light);
    font-size: 0.5rem;
    display: inline-block;
    text-align: center;
    width: 18px;
    height: 18px;
    line-height: 21px;
    border-radius: 5px;
`;

const CreateBox = styled.div`
    text-align: right;
    button {
        margin-top: 1rem;
        margin-right: 3rem;
        padding: 1rem;
        font-size: 0.9rem;
        border: 0;
        background-color: var(--black);
        color: var(--light2);
        cursor: pointer;
        border-radius: 20px;
        transition: all 0.5s;
        &:hover {
            transform: scale(0.9);
        }
    }
`;

class RenderNotices extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <Table summary="this table is Notice table">
                    <caption>NOTICE</caption>
                    <Thead>
                        <TheadBox>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </TheadBox>
                    </Thead>
                    <Tbody>
                        {this.props.notices.map((notice, index) => (
                            <TbodyBox key={index}>
                                <td>{notice.id}</td>
                                <Title>
                                    <Link to={`/notices/${notice.id}`}>
                                        {notice.title}
                                        {notice.notice_comments.length > 0 ? (
                                            <Comment>{notice.notice_comments.length}</Comment>
                                        ) : (
                                            ''
                                        )}
                                    </Link>
                                </Title>
                                <td>{notice.user.name}</td>
                                <td>{notice.created_at}</td>
                            </TbodyBox>
                        ))}
                    </Tbody>
                </Table>
                {this.props.id === 1 ? (
                    <CreateBox>
                        <button onClick={() => this.props.onCreate()}>글 작성</button>
                    </CreateBox>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

RenderNotices.defaultProps = {
    id: 0
};

export default RenderNotices;
