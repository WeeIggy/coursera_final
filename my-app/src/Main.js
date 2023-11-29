import { Link } from "react-router-dom";

function Main(props){
    return (
        <main>
            <section>
            <article class="mainArticle">
                <h1 class=" h1Main">Welcome to our website!</h1>
                <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. 
                    The restaurant has a rustic and relaxed atmosphere with moderate prices,
                     making it a popular place for a meal any time of the day.</p>
            </article>
        </section>
        <section>
                <article>
                <h2>Reserve a table</h2>
                <img class= "miniPic" src="../icons_assets/restaurant.png" alt="menu"/>
                <p>You are more than welcome to reserve a table. Our chefs work with the local and fresh products only.</p>
                
                <Link to="/Reserve"> <div class="button">Reserve a table</div></Link>
            </article>
            <article>
                <h2>Contact Us</h2>
                <img class= "miniPic" src="../icons_assets/contactus.jpg" alt="contactUs"/>
                <p>If you have any questions or concerns do not hesitate to contact us. Please follow the link bellow.</p>
                <Link to="/Contact"> <div class="button">Contact Us</div></Link>
            </article>
            <article>
                <h2>Opening hours</h2>
                <img class= "miniPic" src="../icons_assets/opening.jpg" alt="hours"/>
                <p>Our opening hours:</p>
                <ul id = "openingHours">
                    <li>Mon - Fri: 1pm - 9pm</li>
                    <li>Sat - Sun: 2pm - 10pm</li>
                </ul>
            </article>
        </section>
            
        </main>



    );

}

export default Main;