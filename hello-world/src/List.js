import React, { Component } from 'react';

import './List.css';

import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import Grid from 'material-ui/Grid';

import SimpleMediaCard from './SimpleMediaCard.js';
import Item from './Item.js';
import AddGreeter from './AddGreeter.js';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 300,
  },
  subheader: {
    width: '100%',
  },
});

class List extends Component {

	constructor(props) {
	  super(props);
	  this.state = { greetings: ['Jim', 'Sally'],
	  				 pictures : [] };

	  this.renderGridList = this.renderGridList.bind(this);

	  this.addGreeting = this.addGreeting.bind(this);
	  this.removeGreeting = this.removeGreeting.bind(this);

	  this.loadData = this.loadData.bind(this);
	}

	loadData() {
		fetch('https://my-json-server.typicode.com/Armenm/json1/images')
			.then(results => results.json())
			.then(data => {

				let pictures = data;
				// let pictures = data.map((item) => {
				// 	return (

				// 	<li className='Item'>
				// 		<span>{item.id}</span>
				// 		<span>{item.title}</span>
				// 		<span>{item.title}</span>
				// 	</li>
				// 	)
    //     		})

				console.log("state", pictures )
				this.setState({pictures : pictures })

		})
			.catch(err => console.error(this.props.url, err.toString()))
	}

componentDidMount() {

	this.loadData();
}
  render() {
    return (
    	<div className="List container row">
    	{this.renderGridList()}
    </div>
    );
  }

  // render() {
  //   return <ul>
		// 	<li className='title'>
		// 		<span>Sales Order</span>
		// 		<span>Dealer Name</span>
		// 		<span>Product</span>
		// 	</li>
  //     { this.state.data.map((item, i) => {
		// 		return <li className='Item'>
		// 			<span>{item.userId}</span>
		// 			<span>{item.title}</span>
		// 			<span>{item.body}</span>
		// 		</li>
  //       })
  //     }
  //   </ul>;
  // }

  renderGridList() {
  	
  console.log("state", this.state.pictures )

	return (

	    <div>
	      <Grid container className='typeContainer' spacing={16}>
	        {this.state.pictures.map(item => (
	        	<Grid item xs={3} zeroMinWidth >
	          	<SimpleMediaCard key={item.id} item={item} />
	          </Grid>
	        ))}
	      
	      </Grid>
	    </div>
	  );

	  // return this.state.pictures.map(item => (
	  //   <SimpleMediaCard/>
	  // ));
	}

  addGreeting(newName) {
	  this.setState({ greetings: [...this.state.greetings, newName] });
	}

	removeGreeting(removeName) {
	  const filteredGreetings = this.state.greetings.filter(name => {
	    return name !== removeName;
	  });
	  this.setState({ greetings: filteredGreetings });
	}

}

export default List;