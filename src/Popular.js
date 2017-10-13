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


// const JavaScript = [
//     {
//       number: "#1",
//       url: "https://avatars0.githubusercontent.com/u/9892522?v=4",
//       link: "https://github.com/freeCodeCamp/freeCodeCamp",
//       title: "@freeCodeCamp",
//       parraf: "291107 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars0.githubusercontent.com/u/2918581?v=4",
//       link: "https://github.com/twbs/bootstrap",
//       title: "@twbs",
//       parraf: "116326 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars3.githubusercontent.com/u/69631?v=4",
//       link: "https://github.com/facebook/react",
//       title: "@facebook",
//       parraf: "78177 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars1.githubusercontent.com/u/6128107?v=4",
//       link: "https://github.com/vuejs/vue",
//       title: "@vuejs",
//       parraf: "69806 stars",
//     }
  
//   ];
  
//   const Ruby = [
//     {
//       number: "#1",
//       url: "https://avatars0.githubusercontent.com/u/9892522?v=4",
//       link: "https://github.com/freeCodeCamp/freeCodeCamp",
//       title: "@freeCodeCamp",
//       parraf: "291107 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars0.githubusercontent.com/u/2918581?v=4",
//       link: "https://github.com/twbs/bootstrap",
//       title: "@twbs",
//       parraf: "116326 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars3.githubusercontent.com/u/69631?v=4",
//       link: "https://github.com/facebook/react",
//       title: "@facebook",
//       parraf: "78177 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars1.githubusercontent.com/u/6128107?v=4",
//       link: "https://github.com/vuejs/vue",
//       title: "@vuejs",
//       parraf: "69806 stars",
//     }
  
//   ];
//   const Java = [
//     {
//       number: "#1",
//       url: "https://avatars0.githubusercontent.com/u/9892522?v=4",
//       link: "https://github.com/freeCodeCamp/freeCodeCamp",
//       title: "@freeCodeCamp",
//       parraf: "291107 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars0.githubusercontent.com/u/2918581?v=4",
//       link: "https://github.com/twbs/bootstrap",
//       title: "@twbs",
//       parraf: "116326 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars3.githubusercontent.com/u/69631?v=4",
//       link: "https://github.com/facebook/react",
//       title: "@facebook",
//       parraf: "78177 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars1.githubusercontent.com/u/6128107?v=4",
//       link: "https://github.com/vuejs/vue",
//       title: "@vuejs",
//       parraf: "69806 stars",
//     }
  
//   ];
  
//   const CSS = [
//     {
//       number: "#1",
//       url: "https://avatars0.githubusercontent.com/u/9892522?v=4",
//       link: "https://github.com/freeCodeCamp/freeCodeCamp",
//       title: "@freeCodeCamp",
//       parraf: "291107 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars0.githubusercontent.com/u/2918581?v=4",
//       link: "https://github.com/twbs/bootstrap",
//       title: "@twbs",
//       parraf: "116326 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars3.githubusercontent.com/u/69631?v=4",
//       link: "https://github.com/facebook/react",
//       title: "@facebook",
//       parraf: "78177 stars",
//     },
//     {
//       number: "#1",
//       url: "https://avatars1.githubusercontent.com/u/6128107?v=4",
//       link: "https://github.com/vuejs/vue",
//       title: "@vuejs",
//       parraf: "69806 stars",
//     }
  
//   ];

class Popular extends Component {
    render() {
      return (
        <div>
          <ul className="languages">
            <li style={{ color: 'rgb(208, 2, 27)' }}>All</li>
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>Java</li>
            <li>CSS</li>
            <li>Python</li>
          </ul>
          <li className="popular-item">
            <div className="popular-rank"> #1</div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src="https://avatars0.githubusercontent.com/u/9892522?v=4"
                  alt="Avatar for freeCodeCamp" />
              </li>
              <li>
                <a href="https://github.com/freeCodeCamp/freeCodeCamp">freeCodeCamp</a>
              </li>
              <li>@freeCodeCamp</li>
              <li>291108 stars</li>
            </ul>
          </li>
        </div>
      );
    }
  }

  export default Popular;