import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import './styles/match.css'
import * as images from './images/images'
import useFireBase from "./hooks/useFireBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faSquare } from "@fortawesome/free-solid-svg-icons";

const Match = ({ setActivePage }) => {

    const info = useFireBase('/matches')
    const { id } = useParams();
    const [tab, setTab] = useState('Stats')
    const [match, setMatch] = useState(null)

    useEffect(() => {
        setActivePage('Fixtures')
        if(info){
            let data = info.filter((el) => el.id == id
            )
            //console.log(data)
            setMatch(data[0])
        }
    }, [info])

    return ( <div style={{minHeight: "60vh"}} id="match-page">
                { match && <div className="match">
                    <div className="overview">
                        <div className="comp">
                            <span id="league">{match.league}</span>
                            ·
                            <span>{ match.date }</span>
                            <p>FullTime</p>
                        </div>
                        <div className="scores">
                            <div className="teams">
                                    <div className="home">
                                     <div className="club">
                                            <img className="logo" src={images[`${match.teams.home.logo}`]}/>
                                            <p>{match.teams.home.name}</p>
                                        </div>
                                        <h1 className="score">{match.score.home}</h1>
                                    </div>
                                    <div className="stroke"><h1>-</h1></div>
                                    <div className="away">
                                        <h1 className="score">{match.score.away}</h1>
                                        <div className="club">
                                            <img className="logo" src={images[`${match.teams.away.logo}`]}/>
                                            <p>{match.teams.away.name}</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="events">
                            <div className="home">
                                {match.events.home && match.events.home.map((el, i) => <div key={i} style={{
                                    color: el.type === 'Goal' ? 'black' : 'red'
                                }}>
                                    {`${el.player} ${el.time}`}  <FontAwesomeIcon icon={el.type === 'Goal' ? faFutbol : faSquare} />
                                </div>)}
                            </div>
                            <div className="away">
                                {match.events.away && match.events.away.map((el, i) => <div key={i} style={{
                                    color: el.type === 'Goal' ? 'black' : 'red'
                                }}>
                                    {`${el.player} ${el.time}`} <FontAwesomeIcon icon={el.type === 'Goal' ? faFutbol : faSquare} />
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div className="switch-bar">
                        <div className={`tab ${ tab === "Lineups" && 'active' }`} onClick={() => {setTab('Lineups')}}>LINEUPS</div>
                        <div className={`tab ${ tab === "Stats" && 'active' }`} onClick={() => {setTab('Stats')}}>STATS</div>
                    </div>
                    { tab === 'Stats' && <div className="stats">
                        <div className="stats-header">
                            <img src={images[`${match.teams.home.logo}`]} alt="" />
                            <span>TEAM STATS</span>
                            <img src={images[`${match.teams.away.logo}`]} alt="" />
                        </div>
                        <div className="stats-body">
                            <div className="home-stats">
                                <ul>{ Object.keys(match.homestats).map( (key, i) => <li key={i}>{ match.homestats[key] }</li>)}</ul>
                            </div>
                            <div className="name">
                                <li>Shots on Target</li>
                                <li>Fouls</li>
                                <li>Yellow Cards</li>
                                <li>Passes</li>
                                <li>Possesion</li>
                                <li>Red Cards</li>
                                <li>Shots</li>
                                <li>Corners</li>
                                <li>Offsides</li>
                            </div>
                            <div className="home-stats">
                                <ul>{ Object.keys(match.awaystats).map( (key, i) => <li key={i}>{ match.awaystats[key] }</li>)}</ul>
                            </div>
                        </div>
                    </div> }
                    { tab === 'Lineups' && <div className="lineups">
                        <img src={ images[`${match.lineups}`] } alt="" />
                    </div> }
                </div>}
                {!match && <h1>Match Not Found!!</h1>}
            </div> );
}
 
export default Match;