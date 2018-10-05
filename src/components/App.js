import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './list';
import AddItem from './add_item';
import SingleItem from './single_item';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Route path="/" exact component={List} />
				<Route path="/add" component={AddItem} />
				<Route path="/item/:itemId" component={SingleItem} />
			</div>
		);
	}
}

export default App;
