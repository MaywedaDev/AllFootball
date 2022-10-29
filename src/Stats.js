import React, { useState, useEffect } from 'react'
import './styles/stats.css'
import { epl } from './images/images'
import Players from './components/Players';
import Clubs from './components/Clubs';


function Stats({ setActivePage }){

	const [stats, setStats] = useState(null);

	useEffect(() => {
		setActivePage('Stats');
		fetch('https://football-standings-api.vercel.app/leagues/eng.1/standings?season=2020&sort=asc')
		.then((res) => {
			if (!res.ok){
				throw new Error("Network Response wasn't ok")
			}
			return res.json()
		})
		.then((data) => {
			//console.log(data)
			setStats(data)
		})
		.catch((err) => {
			console.error(err.message)
		})
	}, [])

	return (<div className='stats'>
		<div className="header-info stats-header">
			<h2>Stats</h2>
		</div>
		<div className="select">
				<div>
					<label htmlFor="league">Select League</label>
					<select name="league" id="league">
						<option value="epl">EPL</option>
					</select>
				</div>
				<div>
					<label htmlFor="season">Select Season</label>
					<select name="season" id="season">
						<option value="2020-21">20/21</option>
					</select>
				</div>
		</div>
		<div className="league-data">
			{stats && <>
				<div className="league">
					<div className="imgbox">
						<img src={epl} alt="" />
					</div>
					<h2>Premier League</h2>
				</div>
				<table>
				<thead>
					<tr>
						<td>Team</td>
						{stats.data.standings[0].stats.map((data, i) => <td key={i}>{ data.abbreviation }</td>)} 
					</tr>	
				</thead>
				<tbody>
					{stats.data.standings.map((data, i) => <tr key={i} className={(i < 4 && 'ucl') || (i < 7 && "uel") || ''}>
						<td className="team"> 
							<span>{ i + 1}</span>
							<div className="team-logo">
								<img src={data.team.logos[0].href} alt="" />
							</div>
							 <span>{data.team.shortDisplayName}</span>
						</td>
						{data.stats.map((element, i) => <td key={i}>{element.value || element.displayValue}</td>)}
					</tr>)}
				</tbody>
				</table>
			</>}
			{stats && <div id='comp'>
			<div>
				<span id='col-ucl'></span> UCL
			</div>
			<div>
				<span id='col-uel'></span> Europa
			</div>
			</div>}
		</div>
		<Players />
		<Clubs />
	</div>)
}

export default Stats