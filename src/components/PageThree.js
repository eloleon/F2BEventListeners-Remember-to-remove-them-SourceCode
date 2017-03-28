import React, { Component } from 'react';
import ConsoleLogger from './ConsoleLogger';

export default class PageThree extends Component {
  render() {
    return (
      <div>
        <h1>This is page three</h1>
        <ConsoleLogger />
      </div>
    )
  }
}