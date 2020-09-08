import React from 'react';

class App extends React.Component{
	state = {
		count:0,
	};
	add = () => {
		this.setState(current => ({count: current.count+1}));
	}
	del = () => {
		this.setState(current => ({count: current.count -1}));
	}
	render() {
		return (
			<>
				<h1>the number is: {this.state.count}</h1>
				<button type="button" onClick={this.add}>add</button>
				<button type="button" onClick={this.del}>del</button>
			</>
		);
	}
}

export default App;
