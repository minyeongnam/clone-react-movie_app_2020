import React from 'react';

function Food({ name, picture }){
	return (
		<div>
			<h2>I like {name}</h2>
			<img src={picture} alt="" />
		</div>
	);	
}

const foodLike = [
	{
		id:1,
		name: 'kimchi',
		image: 'https://shopping-phinf.pstatic.net/main_1065829/10658291585.20191231172531.jpg?type=f300'
	},
	{
		id:2,
		name: 'banana',
		image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxNzExMDhfMTQ3%2FMDAxNTEwMTA1NDA2ODk4.TRPE9rtezG3xTDfLo53VzXf057Jpwn5cM3UOkbEqxuwg.sbvqhbGklBnY9JQoExej7aveJbByfLovYq5MMO2Pbs0g.JPEG%2Fmug_obj_151010531834351974.jpg&type=sc960_832'
	},
	{
		id:3,
		name: 'gagaga',
		image: 'https://shopping-phinf.pstatic.net/main_1065829/10658291585.20191231172531.jpg?type=f300'
	},
	{
		id:4,
		name: 'nanana',
		image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxNzExMDhfMTQ3%2FMDAxNTEwMTA1NDA2ODk4.TRPE9rtezG3xTDfLo53VzXf057Jpwn5cM3UOkbEqxuwg.sbvqhbGklBnY9JQoExej7aveJbByfLovYq5MMO2Pbs0g.JPEG%2Fmug_obj_151010531834351974.jpg&type=sc960_832'
	},
	{
		id:5,
		name: 'dadada',
		image: 'https://shopping-phinf.pstatic.net/main_1065829/10658291585.20191231172531.jpg?type=f300'
	},
	{
		id:6,
		name: 'fafafa',
		image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxNzExMDhfMTQ3%2FMDAxNTEwMTA1NDA2ODk4.TRPE9rtezG3xTDfLo53VzXf057Jpwn5cM3UOkbEqxuwg.sbvqhbGklBnY9JQoExej7aveJbByfLovYq5MMO2Pbs0g.JPEG%2Fmug_obj_151010531834351974.jpg&type=sc960_832'
	}
];

function App() {
	return (
		<div>
			<h1>hello</h1>
			{foodLike.map(dish => {
				return <Food name={dish.name} picture={dish.image} key={dish.id} />;
			})}
		</div>
  	);
}

export default App;
