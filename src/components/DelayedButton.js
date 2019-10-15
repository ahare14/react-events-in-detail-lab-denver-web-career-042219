import React, { Component } from 'react'

export default class DelayedButton extends Component {
  handleOnClick = (event) => {
    event.persist()
    setTimeout(() => { this.props.onDelayedClick(event) } , this.props.delay)

  }
  render () {
    return (
      <div>
        <button onClick={this.handleOnClick}>This is the DelayedButton!</button>
      </div>
    )
  }
}