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

const Home = ( {model}) => {
    return (
      <div id="app">
        <div data-reactroot className="container">
          <div className="home-container">
            <h1> Github Battle: Battle your friends... and stuff.</h1>
            <a className="button" href="/battle">Battle</a>
          </div>
        </div>
      </div>
    );
  }
 export default Home;