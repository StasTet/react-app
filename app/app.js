import React from 'react';
import ReactDOM from 'react-dom';

import Main from './client/components/app.jsx';

// class Main extends React.Component {

// 	// getInitialState() {
// 	// 	return{
// 	// 		name: 'Stas'
// 	// 	};
// 	// };

// 	handlerOnChange(e) {
// 		this.setState({
// 			name: e.target.value
// 		})
// 	};

// 	render() {
// 		return (
// 			<div className="container">
// 				<div className="page-header">
// 					<h1>Page1 {this.props.name}</h1>
// 				</div>
// 				<div>
// 					<input type="text" placeholder={this.props.name} onChange={this.handlerOnChange}/>
// 				</div>
// 			</div>
// 		)
// 	}
// }

ReactDOM.render(<Main />, document.getElementById('root'));