import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
    width: 1100px;
    margin : 0 auto;

    color : var(--black);

`;

const Ul = styled.ul`
    display:grid;
    grid-template-columns : repeat(auto-fit, minmax(183.3px, 1fr));
`;
const Li = styled.li`
    text-align:center;
    padding: 1rem 2rem;
    transition: all 0.5s;
    /* border-bottom : 5px solid ${props => (props.current ? "var(--blue)" : "transparent")}; */
    transform : scale(${props => (props.current ? "1.3" : "1")});
`;

const HeaderLink = styled(Link)`

`;

export default withRouter(({ location : {pathname} }) => (
    <Container>
        <Ul>
            <Li current={pathname === "/"}><HeaderLink to="/">Home</HeaderLink></Li>
            <Li current={pathname === "/introduces"}><HeaderLink to="/introduces">Introduce</HeaderLink></Li>
            <Li current={pathname === "/notices"}><HeaderLink to="/notices">Notices</HeaderLink></Li>
            <Li current={pathname === "/posts"}><HeaderLink to="/posts">Post</HeaderLink></Li>
            <Li current={pathname === "/youtubes"}><HeaderLink to="/youtubes">Youtube</HeaderLink></Li>
            <Li current={pathname === "/contacts"}><HeaderLink to="/contacts">Contact</HeaderLink></Li>
        </Ul>
    </Container>

));
