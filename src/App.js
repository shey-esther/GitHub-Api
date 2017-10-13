import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './GitHubApi.js';
import { battle, fetchPopularRepos } from './GitHubApi';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';

const NotFound = (props) => {
  return (
    <div><h2> Error 404! </h2></div>
  );
}

const App = (props) => {
  const { model } = props;
  console.log('app.props', props)
  return (<BrowserRouter>
    <div>
      <div id="app">
        <div data-reactroot className="container">
          <ul className="nav">
            <li><a aria-current="true" href="/" className="activeClass">Home</a></li>
            <li><a aria-current="false" href="/battle">Battle</a></li>
            <li><a aria-current="false" href="/popular">Popular</a></li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/"
          render={() => <Redirect to={'/home'} />} />

        <Route path="/Proyecto-finalLYFT-"
          render={() => <Redirect to={'/home'} />} />

        <Route path="/home" render={() => <Home model={model} />} />
        <Route path="/battle" render={() => <Battle model={model} />} />
        <Route path="/popular" render={() => <Popular model={model} />} />

        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>)
}

export default App;
