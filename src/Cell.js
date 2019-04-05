import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  colorChangeHandler = () => {
    this.setState({color: this.props.sColor})
  }

  render() {
    return (
      <div onClick={this.colorChangeHandler} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
