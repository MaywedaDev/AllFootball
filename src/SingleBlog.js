import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './styles/singleblog.css'
import useFireBase from './hooks/useFireBase';


function SingleBlog(){
	const { id } = useParams();
	const [details, setDetails] = useState(null)
	const info = useFireBase('/blogs')


    useEffect(() => {
        if(info){
            let data = info.filter((el) => el.id == id
            )
            //console.log(data)
            setDetails(data[0])
        }
    }, [info])


	// useEffect(() => {
	// 	fetch(`http://localhost:8000/blogs/${id}`)
	// 		.then((res) => {
	// 			if (!res.ok){
	// 				throw new Error('Network response was not ok');
	// 			}
	// 			return res.json();
	// 		})
	// 		.then(data => {
	// 		setDetails(data);
	// 		})
	// 		.catch((error) => {
	// 		console.error('There has been a problem with your fetch operation', error);
	// 		});
	// }, [])

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


	return(
		<div className="blog-page">

			{ details && <div className="content">
				<h1>{details.title}</h1>
				<div className="info">
					<span>{returnPostDate(new Date(details.time))}</span>/
					<span>{details.name}</span>
				</div>
				<img src={details.img} />
				<p>{details.summary}</p>
			</div>
		}
		</div>
		)
	
}

export default SingleBlog