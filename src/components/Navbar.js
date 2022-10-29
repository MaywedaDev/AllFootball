import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faGears, faSackDollar, faCoins, faEnvelope, faBookmark, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { ptch, artImg1 } from '../images/images.js'


function Navbar({ active }){

	const [open, setOpen] = useState(false);


	function menuToggle(e){
		 let userbar = document.querySelector('.userbar');
		 userbar.classList.toggle('active');
		 setOpen(!open);
	}

	return(
		<div className="navbar">
		<div className="logo"><h1>All Football</h1></div>
		<div className="userid">
			<UserBar src={artImg1} username="Mayweda" menuToggle={menuToggle} open={open} />
		</div>
		<div className="links-wrapper">
			<ul className="links">
			<li><Link to="/" className={active === 'Home' ? 'active' : null}>HOME</Link></li>
			<li><Link to="/articles" className={active === 'Articles' ? 'active' : null}>NEWS</Link></li>
			<li><a href="#">TEAMS</a></li>
			<li><Link to="/stats" className={active === 'Stats' ? 'active' : null}>STATS</Link></li>
			<li><Link to="/fixtures" className={active === 'Fixtures' ? 'active' : null}>MATCH</Link></li>
			<li><a href="#">VIDEO</a></li>
			<li><a href="#">BETTING</a></li>
			<li><a href="#">MORE</a></li>
			</ul>
		</div>
		</div>
		)

}

function UserBar(props){


	return(
		<div className="userbar">
		<div className="menuToggle" onClick={props.menuToggle}></div>
		{props.open && (
			<>
				<div className="usermenu">
				<div className="info">
					<img src={ptch} />
					<img src={props.src} className='userimg' />
					<h3 className="username">{props.username}</h3>
					<div className='coins'>
						<a href='#'>
							<FontAwesomeIcon icon={faCoins} />
							<span>AF Coins</span>
						</a>
					</div>
				</div>
				<ul className="menu">
					<li style={{color:'#FF9C00'}}><FontAwesomeIcon icon={faSackDollar} /><a href="#">Earn Money</a></li>
					<li style={{color:'#2A99DE'}}><FontAwesomeIcon icon={faEnvelope} /><a href="#">Notifications</a></li>
					<li style={{color:'#FBCD16'}}><FontAwesomeIcon icon={faBookmark} /><a href="#">Bookmarks</a></li>
					<li style={{color:'#F33C3C'}}><FontAwesomeIcon icon={faLanguage} /><a href="#">Language</a></li>
					<li style={{color:'#606369'}}><FontAwesomeIcon icon={faGears} /><a href="#">Site Settings</a></li>
					<li style={{color:'#F33C3C'}}><FontAwesomeIcon icon={faCircleXmark} /><a href="#">Log Out</a></li>
				</ul>
			</div>
			<div className="overlay" onClick={props.menuToggle}></div>
			</>
			)
			
		}
		
		</div>
		)

}


export default Navbar;