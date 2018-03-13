/* ***************************************************************** */
/*                                                                   */
/* Licensed Materials - Property of Son Ton                          */
/*                                                                   */
/* (C) Copyright 4CX Corp. 2018 All Rights Reserved.                 */
/*                                                                   */
/* ***************************************************************** */

// Library
import React, { Component } from 'react';

// Constants
import { COLORS_SCHEME_LIST } from '../../../lib/colorsListConfig';

// Style
import './style.css';

export default class ColorsTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedColorHex: ''
    }
  }
  renderColorScheme = shadesList => {
		return shadesList.map(({ id, hex, name }) => (
			<div
				key={id}
				className="colorBlock"
				style={{ backgroundColor: hex }}
			>
				<button
          className="copyButton"
          onClick={() => this.setState({ selectedColorHex: hex })}
        >COPY</button>
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

  render(props) {
    const { selectedColorHex } = this.state;
    return (
      <div>
        <div className="colorListContainer">
          {this.renderColorsList()}
        </div>
        <p>{selectedColorHex ? `Selected HEX color: ${selectedColorHex}` : `No color selected`}</p>
      </div>
    );
  }
}
