import "../styles/footer.css"
import { faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (<div className="footer">
        <div className="lists">
            <div>
                <h4>QUICK LINKS</h4>
                <ul>
                    <li>NEWS</li>
                    <li>STATS</li>
                    <li>MATCH</li>
                    <li>MORE</li>
                </ul> 
            </div>
            <div>
                <h4>INSPIRED BY</h4>
                <ul>
                    <li>Goal.com</li>
                    <li>Livescores.com</li>
                    <li>OneFootball.com</li>
                    <li>Sportsbible.com</li>
                    <li>Pinterest</li>
                </ul>
            </div>
            <div>
                <h4>DESIGNS FROM</h4>
                <ul>
                    <li>Fontawesome.com</li>
                    <li>Iconfinder.com</li>
                    <li>Matt Wojas - Dribble</li>
                </ul>
            </div>
            <div>
                <h4>MADE USE OF</h4>
                <ul>
                    <li>React</li>
                    <li>React-calender</li>
                    <li>Json-server</li>
                </ul>
            </div>
            <div className="socials">
                <h4>FOLLOW ME</h4>
                <ul>
                    <li><a href="https://twitter.com/playermayweda7"><FontAwesomeIcon icon={faTwitter}/></a></li>
                    <li><a href="https://facebook.com/profile.php?id=100010444267704"><FontAwesomeIcon icon={faFacebook}/></a></li>
                    <li><a href="https://www.linkedin.com/in/enyo-onuche-37b124245/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                    <li><a href="https://github.com/MaywedaDev"><FontAwesomeIcon icon={faGithub}/></a></li>
                </ul>
            </div>
        </div>
        <h1>AllFootball.com</h1>
        <p>Based on AllFootballapp</p>
        <p>2022</p>

        <p className="dev">Created by MaywedaDev using React</p>
    </div>);
}

export default Footer;