import React from 'react';

class Main extends React.Component {

	getInitialState() {
		return{
			name: 'Stas'
		};
	},

	handlerOnChange(e) {
		this.setState({
			name: e.target.value
		})
	},

	render() {
		return <h1>Page {this.state.name}</h1>
			<div className="container">
				<div className="page-header">
					
				</div>
				<div>
					<input type="text" placeholder={this.state.name} onChange={this.handlerOnChange}/>
				</div>
			</div>
		
	}
}

export default Main;