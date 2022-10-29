import React, { useState, useEffect } from 'react'
import Scores from './components/Scores'
import "./styles/fixtures.css"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
function Fixtures({ setActivePage }){

	const [date, setDate] = useState(new Date());

	function onChange(date){
		setDate(date)
	}

	useEffect(() => {
		setActivePage('Fixtures')
	}, [])

	return <div className='fixtures'>
		<Scores />
      	<Calendar onChange={onChange} value={date} />
		</div>
}

export default Fixtures