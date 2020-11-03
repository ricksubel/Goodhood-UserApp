import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from '../components/Landing/Landing';
import About from '../components/About/About';
import Posts from '../components/Posts/ShowPosts/Posts';
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/UserProfile";
import CreatePost from '../components/Posts/CreatePost';
import EditPost from '../components/Posts/EditPost';
import PostScroll from '../components/Posts/ShowPosts/PostScroll';

import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";


const Routes = (props) => {
    const loggedIn = useRecoilValue(loggedInState);


    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
            <Route exact path='/neighborhood' component={Posts} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />

            {loggedIn && (
            <Switch>
                <Route path='/profile:id' component={Profile} />
                <Route exact path='/create' component={CreatePost} />
                <Route path='/posts/:id/edit' component={EditPost} />
                <Route path='/scroll' component={PostScroll} />
            </Switch>
            )}
            <Route path='*' render={() => <h1>"not found"</h1>} />
        </Switch>
    );
};

export default Routes;