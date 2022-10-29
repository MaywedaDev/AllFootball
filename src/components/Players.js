import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import useFireBase from '../hooks/useFireBase';


function Players({ limit }) {

    const data = useFireBase('/players', limit)


    return ( <div className="players">
            <div className="header-info">
            <h2>Players</h2>
            </div>
            <div className="player-list">
            { data && data.map((el, i) => <div className='player' key={i}>
            <div className="imgbox"><img src={el.image} alt={el.name} /></div>
            <Link to={`/stats/player/${ el.id }`}>{el.name}</Link>
        </div>)}
            </div>
    </div> );
}

export default Players;