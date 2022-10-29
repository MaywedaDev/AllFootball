import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { artImg1, artImg2, artImg3, artImg4 } from '../images/images.js'



var margin = 0;
var i = 0;

function Content(){


	const blogs = [
					{ title: "How Arsenal chief Edu persuaded Jesus to leave Man City for Gunners", src: artImg1},
					{ title: 'Diogo Dalot urge Ronaldo to stay amid rumours of exit', src: artImg2},
					{ title: 'Can Blues ₤180m worth of unwanted talent their way back into club\'s plan?', src: artImg3},
					{ title: 'Barca ask De Jong to almost cut salary by half as Man utd wait on his decision', src: artImg4}
					]


	

	const [title, setTitle] = useState(null);
	const [counter, setCounter] = useState(0);
			

	function changeNextActive(){
		i++
		if (i > 3){
			i = 0;
		}
	}

	function changePrevActive(){
		i--
		if (i < 0){
			i = 3;
		}
	}

	function slideNextImg(){
		const first = document.querySelector('.imgbox.first');
		margin = margin - 20;
		if (margin >= -60 ) {
			first.style.marginLeft = margin + "%";
		}
		else{ 
			
			margin = 0;
			first.style.marginLeft = 0;
		}
		changeNextActive();
	}

	function slidePrevImg(){
		const first = document.querySelector('.imgbox.first');
		margin = margin + 20;
		if (margin <= 0){
			first.style.marginLeft = margin + "%";
		}
		else{
			margin = -60;
			first.style.marginLeft = margin + "%"
		}
		changePrevActive();
	}

	function changeNextCounter(){
		setCounter(counter => {
			counter++
			if (counter <= 3) {
				return counter 
			}
			else{
				return 0
			}
		})
	}

	function changePrevCounter(){
		setCounter(counter => {
			counter--
			if (counter >= 0) {
				return counter 
			}
			else{
				return 3
			}
		})
	}

	function Article({ blogs }){
		const blogItem = blogs.map((blogs, index) => 
				<div className={`article-preview ${ index == counter ? 'active' : '' }`} key={index}>
					<img src={blogs.src} />
					<p className="title">{blogs.title}</p>
					<span>{`00${index}`}</span>
				</div>
			);
		return blogItem
	}

	useEffect(() => {
		const first = document.querySelector('.imgbox.first');
		first.style.marginLeft = margin + "%";
		if (counter != i){
			setCounter(i);
		}; 
		setTimeout(() => {setTitle(blogs[counter].title)}, 700);
	}, [counter]);


	return(
		<div className="main-content">
			<div className="slider">
				<div className="slides">
					<div className="imgbox first">
						<img src={artImg1} />
					</div>
					<div className="imgbox">
						<img src={artImg2} />
					</div>
					<div className="imgbox">
						<img src={artImg3} />
					</div>
					<div className="imgbox">
						<img src={artImg4} />
					</div>
				</div>
				<div className="sldbtn">
					<button onClick={() => {changePrevCounter(); slidePrevImg()}}><FontAwesomeIcon icon={faChevronLeft} /></button>
					<button onClick={() => {changeNextCounter(); slideNextImg()}}><FontAwesomeIcon icon={faChevronRight} /></button>
				</div>
				<div className="title">
					<h1>{title}</h1>
					<div className="articlebtn">
						<a href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
					<div></div>
				</div>
				</div>
				<div className="newstype"><h4>Editors pick</h4></div>
				
			</div>
			<div className="articles">
				<Article blogs={blogs} />
			</div>
		</div>
		)
}


export default Content;