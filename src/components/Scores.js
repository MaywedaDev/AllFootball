import React, {useState, useEffect} from "react";
import * as images from '../images/images.js';
import { Link } from "react-router-dom";
import useFireBase from "../hooks/useFireBase.js";



	function Scores(){

		const info = useFireBase('/matches')


		return <div className="scores">
					<div className="header-info">
						<h2>LIVE MATCHES</h2>
						<h3>Latest fixtures and matches from all around the world</h3>
					</div>
					<div className="match-list">
					<Matches info={info}/>
					</div>
			   </div>
	}

	function Matches({ info }){
		return  <div>{ info && info.map((match, i) => <div key={i}>
			<div className="match">
					<h6>{match.comp}</h6> 
					<span className="time">{match.date}</span>
					<Link to={`/match/${match.id}`}>
						<div className="teams">
							<div className="home">
									<h2 className="club">{match.teams.home.name}</h2>
									<img className="logo" src={images[`${match.teams.home.logo}`]}/>
							</div>
							<div className="scores"><p>{`${match.score.home} - ${match.score.away}`}</p></div>
							<div className="away">
									<img className="logo" src={images[`${match.teams.away.logo}`]}/>
									<h2 className="club">{match.teams.away.name}</h2>
							</div>
						</div>
					</Link>
					<span className="venue">{match.venue}</span>
				</div>
			</div>)
			}</div> 
	}









export default Scores