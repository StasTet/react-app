import React from 'react';

class Main extends React.Component {

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
					<h1>Pag22222e {this.state.name}</h1>
				</div>
				<div>
					<input type="text" value={this.state.name} onChange={this.handleChange}/>
				</div>
			</div>
		)
	}
}

export default Main;
