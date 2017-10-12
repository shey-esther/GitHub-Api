import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './GitHubApi.js';

/*class App extends Component {
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
}*/

// class App extends Component {
//   render() {
//     return (
//       <div className="row">
//         <form className="column">
//           <label className="header" htmlFor="username">Player One</label>
//           <input
//             type="text"
//             id="username"
//             placeholder="github username"
//             autoComplete="off"
//             defaultValue />
//           <button className="button" type="submit" disabled>Submit</button>
//         </form>
//         <form className="column">
//           <label className="header" htmlFor="username">Player Two</label>
//           <input
//             type="text"
//             id="username"
//             placeholder="github username"
//             autoComplete="off"
//             defaultValue />
//           <button className="button" type="submit" disabled>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

class App extends Component {
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
            <li>
              291108 stars
</li>
          </ul>
        </li>
      </div>

    );
  }
}

export default App;
