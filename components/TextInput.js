import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: 'inital'
    }
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value
    })
  }

  deleteLetter() {
    this.setState({
      inputText: this.state.inputText.slice(0,-1)
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="This is going to be text"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)}/>
      </div>
    )
  }
}

export default TextInput