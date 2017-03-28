import React, { Component } from 'react';
import ConsoleLogger from './ConsoleLogger';

export default class PageTwo extends Component {
  render() {
    return (
      <div>
        <h1>This is page two</h1>
        <ConsoleLogger />
        <ConsoleLogger />
      </div>
    )
  }
}