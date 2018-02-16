import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NUM_AVAILABLE_COLORS } from 'lib/colorsListConfig';

export default class App extends Component {
	renderColorBlocks = () => {};

	render() {
		console.log(NUM_AVAILABLE_COLORS);
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">
						Welcome to YJT React Components
					</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to
					reload.
				</p>
			</div>
		);
	}
}
