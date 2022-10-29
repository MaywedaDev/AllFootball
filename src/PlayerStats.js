import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import useFireBase from "./hooks/useFireBase";
import './styles/statpage.css';

function PlayerStats({ setActivePage }) {

    const { id } = useParams();
    const info = useFireBase('/players')

    const [player, setPlayer] = useState(null)

    useEffect(() => {
        setActivePage('Stats')
        if(info){
            let data = info.filter((el) => el.id == id
            )
            //console.log(data)
            setPlayer(data[0])
        }
    }, [info])


    return ( <div style={{minHeight: "60vh"}} className="statspage">
        { player && <div className="details">
            <div className="header-info">
                <h2>{ player.name }</h2>
            </div>
            <div className="bio">
                <div className="imgbox">
                    <img src={player.image} alt={player.name} />
                </div>
                <div className="about">
                    <ul className="info">
                        <li><span>Date of Birth</span><p>{ player.dob }</p></li>
                        <li><span>Born In</span><p>{ player.bio }</p></li>
                        <li><span>Club</span><p>{ player.club}</p></li>
                        <li><span>Height/Weight</span><p>{ player.hw }</p></li>
                        <li><span>Country</span><p>{ player.nation }</p></li>
                    </ul>
                    {/**/}
                    <div className="stats">
                        <table>
                            <thead>
                                <tr>
                                    <td className="comp">Competition</td>
                                    <td>Assists</td>
                                    <td>Goals</td>
                                    <td>Minutes</td>
                                    <td>Apps</td>
                                </tr>
                            </thead>
                            <tbody>
                            {  player.stats.map((el, i) => <tr key={i}>
                        <td className="comp">{ el.comp }</td>
                        <td>{ el.info.ast }</td>
                        <td>{ el.info.gls }</td>
                        <td>{ el.info.min }</td>
                        <td>{ el.info.mp }</td>
                    </tr>)}
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
            </div>}
        { !player && <h1>This player or club does not exist</h1> }
    </div> );
}

export default PlayerStats;