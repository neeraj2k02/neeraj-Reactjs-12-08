import { Component } from "react";
import './header.css';

class Header extends Component {
    render() {
        return(
            <header>

                <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo" height={55} width={193}></img>

                <div>
                    <ul className="block" >
                        <li> <a href="#">All Courses</a> </li>
                        <li> <a href="#">Placements</a> </li>
                        <li> <a href="#">Internship</a> </li>
                        <li> <a href="#">Existing Students</a> </li>
                        <li> <a href="#">About Us</a> </li>
                        <li> <a href="#">Reviews</a> </li>
                        <li> <a href="#">Blog</a></li>
                    </ul>
                </div>

            </header>
        );
    }
}

export default Header;