import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { COLORS_SCHEME_LIST } from 'lib/colorsListConfig';

export default class App extends Component {
	renderColorScheme = shadesList => {
		return shadesList.map(({ id, hex, name }) => (
			<div
				key={id}
				className="colorBlock"
				style={{ backgroundColor: hex }}
			>
				<button className="copyButton">COPY</button>
				<div className="colorHex">{name}</div>
			</div>
		));
	};

	renderColorsList = () => {
		return Object.entries(COLORS_SCHEME_LIST).map(colorScheme => {
			const colorName = colorScheme[0];
			const shadesList = colorScheme[1];
			return (
				<div key={colorName}>{this.renderColorScheme(shadesList)}</div>
			);
		});
	};

	render() {
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
				<div className="colorListContainer">
					{this.renderColorsList()}
				</div>
			</div>
		);
	}
}
