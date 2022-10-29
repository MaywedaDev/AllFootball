import { img67, img68, img69, img70, img71, img72, img73, img74, img75 } from './images/images'
import { Link } from 'react-router-dom';

function NotFound() {
    const images = [img67,img68,img69,img70,img71,img72,img73,img74,img75]
    const x = Math.floor(Math.random() * (images.length - 1))
    return ( <div className="notfound">
                <h3>Were you looking for Me?</h3>
                <div className="imgbox">
                    <img src={images[x]} alt="" />
                </div>
                <h3>If not then,</h3>
                <h1>Congratulations, you are lost.</h1>
                <h3>Try to click on one of these links next time.</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/stats">Stats</Link></li>
                    <li><Link to="/articles">News</Link></li>
                    <li><Link to="/fixtures">Matches</Link></li>
                </ul>
            </div> );
}

export default NotFound;