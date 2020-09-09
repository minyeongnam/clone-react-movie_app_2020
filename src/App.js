import React from 'react';

class App extends React.Component{
	state= {
		isLoading:true,
		movies:[],
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({isLoading:false});
		}, 6000);
		//영화데이터로딩
	}
	render() {
		const {isLoading} = this.state;
		return <div>{isLoading ? "Loding...	" : "we are ready"}</div>;
	}
}

export default App;
