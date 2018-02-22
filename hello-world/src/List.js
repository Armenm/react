import React, { Component } from 'react';

import './List.css';


import PropTypes from 'prop-types';


import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import Grid from 'material-ui/Grid';

import SimpleMediaCard from './SimpleMediaCard.js';
import Item from './Item.js';
import AddGreeter from './AddGreeter.js';


import { InstantSearch, SearchBox } from 'react-instantsearch/dom';

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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class List extends Component {

	constructor(props) {

	  super(props);

	  const { classes } = props;

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

const { classes } = this.props;
    return (
    	<div className="List container row">
    	<AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Android stash
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

       <InstantSearch
	    appId="latency"
	    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
	    indexName="bestbuy">
	    <header>
	    <SearchBox translastions={{placeholder:'Search'}} />
	    </header>
	  </InstantSearch>

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

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);