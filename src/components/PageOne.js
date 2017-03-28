import React, { Component } from 'react';
import ConsoleLogger from './ConsoleLogger';

export default class PageOne extends Component {
  render() {
    return (
      <div>
        <h1>This is page one</h1>
        <ConsoleLogger />
        <ConsoleLogger />
        <ConsoleLogger />
      </div>
    )
  }
}