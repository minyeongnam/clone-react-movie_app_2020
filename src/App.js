import React from 'react';
import axiso from 'axios';
import Movie from './Movie';

class App extends React.Component{
	state= {
		isLoading:true,
		movies:[],
	};	
	componentDidMount(){	
		//영화데이터로딩
		this.getMovies();
	}
	getMovies = async() => {
		const {
			data: {
				data: {movies},
			},
		} = await axiso.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
		this.setState({movies, isLoading:false});
	}
	render() {
		const {isLoading, movies} = this.state;
		return (
			<div>
				{isLoading ? "Loding...	" : movies.map((item) => {
					console.log(movies)
					return (
						<Movie 
							id={item.id}
							year={item.year}
							title={item.title}
							summary={item.summary}
							title={item.poster}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
