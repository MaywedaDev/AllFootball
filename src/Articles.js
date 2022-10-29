import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import './styles/articles.css'
import { artImg7 as artImg1 , artImg5 as artImg2 , artImg6 as artImg3} from './images/images.js'

function Articles({ setActivePage }){

	const mainBlgs = [
					{ title: "OFFICIAL: Mingueza signs with Celta from Barca, Barca reserve buyback option", src: artImg1, time: 'an hour ago'},
					{ title: 'Bankrupt Barca: How has the club been able to raise money to sign new players?', src: artImg2, time: '5 hours ago'},
					{ title: 'Aguero claims Haaland \'was to used to Germany\' after his horror miss', src: artImg3, time: '5 hours ago'}
					]

	const [limit, setLimit] = useState(32);

	function morePosts(){
		setLimit(limit + 6)
	}

	useEffect(() => {
		setActivePage('Articles')
	}, [])

	return(
		<div id="article-page">
			<div className="main-blgs">
				{ mainBlgs.map((blog, i) => <div key={i} className={`article-${i}`}>
					<div className="imgbox">
						<img src={blog.src} />
					</div>
					<div className="content">
						<h3>{blog.title}</h3>
						<span>{blog.time}</span>
					</div>
				</div>) }
			</div>
			<Blogs limit={limit} morePosts={morePosts}/>
		</div>
		)
}

export default Articles 