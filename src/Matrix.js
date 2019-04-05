import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentColor: ''
    }
  }

  colorPass = () => {
    return this.state.currentColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} colorPass={() => this.colorPass()}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  selectedColor = e => {
    this.setState({currentColor: e})
  }

  render() {
    console.log(this.state.currentColor);
    return (
      <div id="app">
        <ColorSelector click={this.selectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
