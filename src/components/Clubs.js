import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../hooks/useFireBase';

function Clubs({limit}) {
    const data = useFireBase('/clubs', limit);


    return ( <div id="clubs">
            <div className="header-info">
            <h2>Teams</h2>
            </div>
            <div className="clubs-list">
            { data && data.map((el, i) => <div className='club' key={i}>
            <div className="imgbox"><img src={el.image} alt={el.name} /></div>
            <Link to={`/stats/club/${ el.id }`}>{el.name}</Link>
        </div>)}
            </div>
    </div> );
}

export default Clubs;