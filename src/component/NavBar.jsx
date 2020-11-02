import React, {Component} from "react";
// import {BrowserRouter as Link} from "react-router-dom";
import { Link } from 'react-router-dom';

class NavBar extends Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/home'>Home</Link>
                            <Link to='/corona'>Corona News</Link>
                           
                        </li>


                    </ul>
                </nav>

            </div>
        )
    }
}

export default NavBar