import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import './Item.css';

class Item extends Component {

	constructor(props) {
	  super(props);
	  this.state = { greeting: 'Hello' };
	  this.frenchify = this.frenchify.bind(this);
	  this.removeGreeting = this.removeGreeting.bind(this);
	}

  render() {
    return (
    	<div className="Item">
    	<Card>
      {this.state.greeting} {this.props.name}!
      <br/>
      <Button onClick={this.frenchify}>Frenchify!</Button>
      <br/>
      <Button onClick={this.removeGreeting}>Remove Me!</Button>
      </Card>

    </div>
    );
  }

  frenchify() {
	  this.setState({ greeting: 'Bonjour' });
	}

	removeGreeting() {
	  this.props.removeGreeting(this.props.name);
	}
}

export default Item;