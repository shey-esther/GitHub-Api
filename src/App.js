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
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';

const NotFound = (props) => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

const App = (props) => {
	const {model} =  props;
	console.log('app.props', props)
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/"
				       render={() => <Redirect to= {'/home'}/>}/>

				<Route  path="/Proyecto-finalLYFT-"
				       render={() => <Redirect to= {'/home'}/>}/>

				<Route  path="/home" render={() => <Home model={model} />}/>
				<Route  path="/signup" render={() => <SignUp model={model} />}/>
				<Route  path="/signup-form" render={() => <SignUpForm model={model} />}/>

				<Route  path="/lyftmap" render={() => <LyftMap model={model} />}/>

				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;
