import React from "react";
import '../Landing/landing.css';
import { Link } from "react-router-dom";
function Landing(){

    return(
        <div className="landing">
            <div className="title">
                <h1>Hi stranger, welcome to earth</h1>
                <Link to='/home'>
                    <button className="initial">Start experience</button>
                </Link>
            </div>
        </div>
    );
}

export default Landing;