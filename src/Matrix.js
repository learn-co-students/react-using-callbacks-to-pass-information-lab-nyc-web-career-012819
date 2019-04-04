import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#FFF'
    };
  }

  // getColor = () => this.state.backgroundColor;

  colorChanger = (color) => {
    this.setState({backgroundColor: color})
  };

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColor={this.state.backgroundColor} />)
  );

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  );

  render() {
    console.log(this.state.backgroundColor)
    return (
      <div id="app">
        <ColorSelector colorChanger={this.colorChanger} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    );
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
