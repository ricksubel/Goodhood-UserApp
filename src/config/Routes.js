import React from "react";
import { Switch, Route } from "react-router-dom";
import About from '../components/About/About';
import ForHelp from '../components/ForHelp/ForHelp';
import ToHelp from '../components/ToHelp/ToHelp';


const Routes = (props) => {
    // const loggedIn = useRecoilValue(loggedInState);
    return (
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/about' component={About} />
        <Route exact path='/for-help' component={ForHelp} />
        <Route exact path='/to-help' component={ToHelp} />
        {/* {loggedIn && (
          <Switch>
            <Route path='/games/new' component={NewGame} />
            <Route path='/games/:id/edit' component={EditGame} />
            <Route path='/games/:id' component={GameShow} />
            <Route path='/games' component={GameList} />
          </Switch>
        )} */}
        <Route path='*' render={() => <h1>"not found"</h1>} />
      </Switch>
    );
  };
  
  export default Routes;