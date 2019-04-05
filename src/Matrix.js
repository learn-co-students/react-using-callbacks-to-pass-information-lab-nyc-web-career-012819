import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state = {
    selectedColor: ""
  }

  constructor() {
    super()
  }

  colorSelectorHandler = (color) => {
    this.setState({selectedColor: color})
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} sColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    console.log(this.state.selectedColor);
    return (
      <div id="app">
        <ColorSelector selectColor={color => this.colorSelectorHandler(color)}/>
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
