import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './styles/statpage.css'
import useFireBase from "./hooks/useFireBase";


function ClubStats({ setActivePage }) {

    const { id } = useParams();
    const info = useFireBase('/clubs')

    const [club, setClub] = useState(null)

    useEffect(() => {
        setActivePage('Stats')
        if(info){
            let data = info.filter((el) => el.id == id
            )
            //console.log(data)
            setClub(data[0])
        }
    }, [info])


    return ( <div style={{minHeight: "60vh"}} className="statspage">
    { club && <div className="details">
        <div className="header-info">
            <h2>{ club.name }</h2>
        </div>
        <div className="bio">
            <div className="imgbox">
                <img src={club.image} alt={club.name} />
            </div>
            <div className="about">
                <ul className="info">
                    <li><span>Position</span><p>{ club.position }</p></li>
                    <li><span>Gls/M</span><p>{ club.gpm }</p></li>
                    <li><span>GCs/M</span><p>{ club.gcm }</p></li>
                </ul>
                {/**/}
                <div className="stats">
                    <table>
                        <thead>
                            <tr>
                                <td className="comp">Form</td>
                                <td>P</td>
                                <td>W</td>
                                <td>D</td>
                                <td>L</td>
                                <td>GF</td>
                                <td>GA</td>
                                <td>GD</td>
                                <td>PPG</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Home</td>
                            { Object.keys(club.homeform).map( (key, i) => <td key={i}>{ club.homeform[key] }</td>)}
                            </tr> 
                            <tr>
                                <td>Away</td>
                                { Object.keys(club.awayform).map( (key, i) => <td key={i}>{ club.awayform[key] }</td>)}   
                            </tr>
                            <tr>
                                <td>Overall</td>
                                { Object.keys(club.overall).map( (key, i) => <td key={i}>{ club.overall[key] }</td>)}
                            </tr>
                        {/* info.stats.map((el, i) => <tr key={i}>
                    <td className="comp">{ el.comp }</td>
                    <td>{ el.info.ast }</td>
                    <td>{ el.info.gls }</td>
                    <td>{ el.info.min }</td>
                    <td>{ el.info.mp }</td>
</tr>) */}
                        </tbody>
                    </table>
                    </div>
            </div>
        </div>
        </div>}
    { !club && <h1>This player or club does not exist</h1> }
</div> );
}

export default ClubStats;