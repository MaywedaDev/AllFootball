import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Blogs from './components/Blogs';
import Scores from './components/Scores';
import Players from './components/Players';
import Clubs from './components/Clubs';


function Home({ setActivePage }){

	const [limit, setLimit] = useState(8);

		function morePosts(){
				setLimit(limit + 6)
		}

		useEffect(() => {
			setActivePage('Home')
		}, [])

		function handleClose(){

		}
		const details = "";
	return(
		<div className="Home">
      		<Sidebar />
        	<div className="main">
        		<Content /> 
        		<Blogs limit={limit} morePosts={morePosts}/>
        		<Scores />
				<Players limit={5}/>
				<Clubs limit={5}/>
       		</div>
      	</div>
		)	
}

export default Home

