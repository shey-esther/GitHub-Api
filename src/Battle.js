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

const Battle = ( {model}) => { 
    return (
      <div className="row">
        <form className="column">
          <label className="header" htmlFor="username">Player One</label>
          <input
            type="text"
            id="username"
            placeholder="github username"
            autoComplete="off"
            defaultValue />
          <button className="button" type="submit" disabled>Submit</button>
        </form>
        <form className="column">
          <label className="header" htmlFor="username">Player Two</label>
          <input
            type="text"
            id="username"
            placeholder="github username"
            autoComplete="off"
            defaultValue />
          <button className="button" type="submit" disabled>Submit</button>
        </form>
      </div>
    );
  }
  export default Battle;
