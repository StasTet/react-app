import React, { Component } from 'react';

import diaryList from './diaryList.jsx';

class Main extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Stas',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({name: event.target.value});
	}


	render() {
		return (
			<div className="container">
				<div className="page-header">
					<h1>Page {this.state.name}</h1>
				</div>
				<div>
					<input type="text" value={this.state.name} onChange={this.handleChange}/>
				</div>
			</div>

		)
	}
}

export default Main;
