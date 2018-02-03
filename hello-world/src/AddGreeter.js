import React, { Component } from 'react';
import './AddGreeter.css';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }

  handleUpdate(event) {
    this.setState({ greetingName: event.target.value });
  }

  render() {
    return (
      <div className="AddGreeter">
      <TextField
        type="text"
        onChange={this.handleUpdate}
        value={this.state.greetingName}
      />
      &nbsp;&nbsp;
      <Button onClick={this.addGreeting}>Add</Button>
    </div>
    );
  }

  addGreeting() {
	  this.props.addGreeting(this.state.greetingName);
	  this.setState({ greetingName: '' });
	}
}

export default AddGreeter;