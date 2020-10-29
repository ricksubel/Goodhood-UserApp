import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from '../components/Landing/Landing';
import About from '../components/About/About';
import ForHelp from '../components/ForHelp/ForHelp';
import ToHelp from '../components/ToHelp/ToHelp';
import Create from '../components/Posts/Create-Posts'
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/UserProfile";
import { useRecoilValue } from "recoil";
import { loggedInState } from "../recoil/selectors";

const Routes = (props) => {
    const loggedIn = useRecoilValue(loggedInState);

    return (
        <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
            <Route exact path='/for-help' component={ForHelp} />
            <Route exact path='/to-help' component={ToHelp} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />

            {loggedIn && (
                <Switch>
                <Route exact path='/create' component={Create} />
                <Route exact path='/profile' component={Profile} />

                {/* <Route path='/games/new' component={NewGame} />
                <Route path='/games/:id/edit' component={EditGame} />
                <Route path='/games/:id' component={GameShow} />
                <Route path='/games' component={GameList} /> */}
            </Switch>
            )}
            <Route path='*' render={() => <h1>"not found"</h1>} />
        </Switch>
    );
};

export default Routes;