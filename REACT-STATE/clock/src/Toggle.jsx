
import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isToggleOn: true
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={(e) => this.deleteItem(e, id)}>Delete</button>
      </div>
    )
  }
}
