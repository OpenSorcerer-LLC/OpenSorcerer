import React, { Component } from 'react';
import Box from './box.jsx'
import TestComponent from './testComponent.jsx'

export default class App extends Component {
  render() {
    return (
      <div id='container'>
        <div>open sorcererrrrrrrrrr</div>
        <TestComponent />
        <Box />
      </div>
    )
  }
}
