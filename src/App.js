import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/notre-histoire" activeStyle={{color:"red"}}>notre histoire</NavLink>
            </li>
          </ul>
          <hr/>
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
