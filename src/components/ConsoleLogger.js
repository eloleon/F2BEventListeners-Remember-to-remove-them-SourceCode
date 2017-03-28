import React, { Component } from 'react';

export default class ConsoleLogger extends Component {
  constructor(props){
    super(props);

    this.state = { id: Math.random() };

    this._displayMessage = this.displayMessage.bind(this);
  }

  componentWillMount(){
    document.body.addEventListener('click', this.displayMessage.bind(this));
  }

  componentWillUnmount(){
    document.body.removeEventListener('click', this.displayMessage.bind(this));
  }

  displayMessage(){
    console.log('Event Listeners from ConsoleLogger with id:', this.state.id);
  }
  render() {
    return <div>Console Logger</div>
  }
}