
import { Link } from "react-router-dom";
function Nav(props){
    return (
        <nav>
            <ul>
                <li key="home"><a href ="/">Home</a></li>
                <li key="aboutUs"><Link to="/About">About us</Link></li>
                <li key="contactUs"><Link to="/Contact">Contact us</Link></li>
                <li key="bookTable"><Link to="/Reserve">Reserve a table</Link></li>
            </ul>
        </nav>



    );

}

export default Nav;