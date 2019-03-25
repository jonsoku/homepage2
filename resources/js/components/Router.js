import React, { Component } from 'react';
import {HashRouter as  Router, Route, Redirect, Switch} from "react-router-dom";
import Home from '../Route/Home'
import Introduce from '../Route/Introduce'
import Notice from '../Route/Notice'
import Post from '../Route/Post'
import Youtube from '../Route/Youtube'
import Header from './Header';
import NoticeShow from '../Route/Notice/Show/NoticeShow';
import NoticeEdit from '../Route/Notice/Edit/NoticeEdit';
import NoticeCreate from '../Route/Notice/Create/NoticeCreate';

export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/introduces" exact component={Introduce}/>
            <Route path="/introduces/academy" render={()=> <h1>popular</h1>} />
            <Route path="/notices" exact component={Notice}/>
            <Route path="/notices/create" exact component={NoticeCreate}/>
            <Route path="/notices/:id" exact component={NoticeShow}/>
            <Route path="/notices/:id/edit" exact component={NoticeEdit}/>
            <Route path="/posts" exact component={Post}/>
            <Route path="/youtubes" exact component={Youtube}/>
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
)
