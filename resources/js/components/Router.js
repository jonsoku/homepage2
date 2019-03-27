import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Route/Home';
import Notice from '../Route/Notice';
import Youtube from '../Route/Youtube';
import Header from './Header';
import NoticeShow from '../Route/Notice/Show/NoticeShow';
import NoticeEdit from '../Route/Notice/Edit/NoticeEdit';
import NoticeCreate from '../Route/Notice/Create/NoticeCreate';
import YoutubeCreate from '../Route/Youtube/Create/YoutubeCreate';
import YoutubeShow from '../Route/Youtube/Show/YoutubeShow';
import Introduce from '../Route/Introduce/Introduce';
import SubjectsCreate from '../Route/Introduce/SubjectsCreate';
import Apply from '../Route/Apply';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/introduces" exact component={Introduce} />
                <Route path="/introduces/subjectsCreate" exact component={SubjectsCreate} />
                <Route path="/introduces/academy" render={() => <h1>popular</h1>} />
                <Route path="/notices" exact component={Notice} />
                <Route path="/notices/create" exact component={NoticeCreate} />
                <Route path="/notices/:id" exact component={NoticeShow} />
                <Route path="/notices/:id/edit" exact component={NoticeEdit} />
                <Route path="/applies" exact component={Apply} />
                <Route path="/youtubes" exact component={Youtube} />
                <Route path="/youtubes/create" exact component={YoutubeCreate} />
                <Route path="/youtubes/:id" exact component={YoutubeShow} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);
