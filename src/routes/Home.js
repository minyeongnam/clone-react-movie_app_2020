import React from 'react';
import axiso from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{
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
			<section className="container">
				{isLoading ? (
					<div className="loader">
						<span className="loader__text">Loding...</span>
					</div> 
				):(
					<div className="movies">
						{movies.map((item) => {
							return (
								<Movie
									key={item.id}
									id={item.id}
									year={item.year}
									title={item.title}
									summary={item.summary}
									poster={item.medium_cover_image}
									genres={item.genres}
								/>
							);
						})}
					</div>
				)}
			</section>
		);
	}
}

export default Home;
