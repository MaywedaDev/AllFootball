import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { germany, spain, italy, portugal, france, england, netherlands, epl, serieA, laLiga, ligue1, ucl, uecl, uel, efl, laliga2, eredivise, bundesliga, ligaNos, bundesliga2, copaAmerica, copaDelRay, copaItalia, worldCup, natLeague,
	caf, cdf , dfb, ligue2, knvb, euros} from '../images/images.js'

function Sidebar(){
	return(
		<div className="sidebar">
			<div className="content">
			<SearchBox />
			<LeagueList />
			</div>
		</div>
		)
}


function SearchBox(){
	return(
		<div className="searchbar">
			<form>
			<button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
			<input type="text" placeholder="Search..." />
			</form>
		</div>
		)
}

function LeagueList(){

	const leagues = [
					{country:'England',
					 comps: [{name:'Premier League', src: epl}, {name:'EFL Championship', src: efl}, {name: 'EFL Cup',src: efl}],
					 src: england },	
					{country:'Spain',
					 comps: [{name:'Laliga', src: laLiga}, {name:'La Liga 2', src: laliga2}, {name:'Copa Del Ray', src: copaDelRay}],
					 src: spain },
					{country:'Italy',
					 comps: [{name:'Serie A', src: serieA}, {name:'Serie B', src: serieA}, {name:'Copa Itallia', src: copaItalia}],
					 src: italy },
					{country:'Germany',
					 comps: [{name:'Bundesliga', src: bundesliga}, {name:'2.Bundesliga', src: bundesliga2}, {name:'DFB Pokal', src: dfb}],
					 src: germany },
					{country:'Portugal',
					 comps: [{name:'Liga Nos', src: ligaNos}, {name:'Portuguese Liga Pro', src: ligaNos}, {name:'PS-CUP', src: ligaNos}],
					 src: portugal },
					{country:'Netherlands',
					 comps: [{name:'Eredivise', src: eredivise}, {name:'KNVB Beker', src: knvb}],
					 src: netherlands },
					{country:'France',
					 comps: [{name:'Ligue 1', src: ligue1}, {name:'Ligue2', src: ligue1},{name:'Coupe de France', src: cdf}],
					 src: france },
					{country:'International',
					 comps: [{name:'World Cup', src: worldCup}, {name:'Euros', src: euros}, {name:'Uefa Nat.League', src: natLeague}, {name:'AFCON', src: caf}, {name:'Copa America', src: copaAmerica}],
					 src: worldCup },
					{country:'UEFA',
					 comps:[{name:'UCL', src: ucl}, {name:'UEL', src: uel},{name:'Uefa Confs. League', src: uecl}],
					 src: ucl }
					]

	function open(e){

		let content = e.target.nextElementSibling;

		if (content.style.maxHeight){
			content.style.maxHeight = null;
		}
		else {
			content.style.maxHeight = content.scrollHeight + 'px'
		}

	}

	const list = leagues.map((comp, index) => 
					<li key={index} className="countries">
						<div className="name" onClick={open}>
							<img className="logo" src={comp.src}/>
							<a href="#">{comp.country}</a>
							<FontAwesomeIcon icon={faChevronDown}/>
						</div>
						<ul className="leagues">{comp.comps.map((league, i) =>
								<li key={i} className="comps">
								<img className="logo" src={league.src}/>
								<a href="#">{league.name}</a>
								</li>
							)}
						</ul>
					</li>
		)

	return (
		<ul>
			{list}
		</ul>
		)
}






export default Sidebar;