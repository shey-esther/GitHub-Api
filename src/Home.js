import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './GitHubApi.js';
import {battle, fetchPopularRepos} from './GitHubApi';

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div id="app">
        <div data-reactroot className="container">
          <ul className="nav">
            <li><a aria-current="true" href="/" className="activeClass">Home</a></li>
            <li><a aria-current="false" href="/battle">Battle</a></li>
            <li><a aria-current="false" href="/popular">Popular</a></li>
          </ul>
          <div className="home-container">
            <h1> Github Battle: Battle your friends... and stuff.</h1>
            <a className="button" href="/battle">Battle</a>
          </div>
        </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}