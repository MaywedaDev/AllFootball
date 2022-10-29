import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../hooks/useFireBase';




function Blogs({ limit, morePosts }){

	const data = useFireBase('/blogs')
	const [value, setValue] = useState('')
	const [blogs, setBlogs] = useState(null)

	useEffect(() => {
		if (data) {
			if(value == ''){
				setBlogs(data.splice(0, limit))
			} else {
				setBlogs(data.filter((post) => searchFilter(post)).splice(0, limit));
			}
		}
	}, [data, limit, value])
	// useEffect(() => {
	// 	fetch('http://localhost:8000/blogs')
	// 		.then((res) => {
	// 			if (!res.ok){
	// 				throw new Error('Network response was not ok');
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((data) => {
	// 			posts = data.sort((a, b) => 
	// 			new Date(b.time) - new Date(a.time)
	// 		)
	// 		if (value === ''){
	// 			setBlogs(posts.splice(0, limit));
	// 		}
	// 		else {
	// 			setBlogs(posts.filter((post) => searchFilter(post)).splice(0, limit));
	// 		}
	// 		})
	// 		.catch((error) => {
	// 		console.error('There has been a problem with your fetch operation', error);
	// 		});
	// }, [limit, value])

	function returnPostDate(date) {
		 const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
		 const currentDate = new Date();

		 if( currentDate.getDate() >= date.getDate() && currentDate.getDate() - date.getDate() < 1){
		 	if( currentDate.getHours() - date.getHours() < 1){
		 		return `${ currentDate.getMinutes() - date.getMinutes() } minutes ago`
		 	}
		 	return `${ currentDate.getHours() - date.getHours() } hours ago`
		 }
		return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
	}

		const searchFilter = (post) =>
			[post.title, post.name, post.summary].join('').toLowerCase().indexOf(value.toLowerCase()) !== -1;


	function LoadPosts(props){
		const posts = props.blogs;
		const displayPosts = posts.map((post) => (
		<div className="blog-preview" key={post.id}>
				<div className="imgbox">
					<img src={post.img} />
				</div>
				<div className="details">
					<h4 className="title"><Link to={`/articles/blogs/${post.id}`}>{post.title}</Link></h4>
					<p>{post.summary}</p>
					<div className="info">
						<span className="time">{returnPostDate(new Date(post.time))}</span>
						<span className="author">{post.name}</span>
					</div>
				</div>
			</div>
			));
		return displayPosts
	}


	function filterBlogs(e){
		setValue(e.target.value);

	}

	return(
		<div className="blogs">
			<div className="header-info">
				<h2>NEWS & ARTICLES</h2>
				<h3>Latest football News from all around the world</h3>
			</div>
			<div className="blg-search-bar">
				{blogs && <input type="text" className="blg-search" placeholder="Search for an Article by name..." 
				value={value} onChange={filterBlogs}/>}
			</div>
			{blogs && <LoadPosts blogs={blogs}/>}
			{blogs && blogs.length == 0 && <p className='no-post'>There is no such Article</p>}
			<div className="show-more">
				<button onClick={morePosts}>Show More</button>
			</div>

		</div>
		)
}



export default Blogs