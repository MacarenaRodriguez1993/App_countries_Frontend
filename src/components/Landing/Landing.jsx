import React from "react";
import '../Landing/landing.css';
import { Link } from "react-router-dom";
function Landing(){

    return(
        <div className="landing">
            <div className="title">
                <h1>Hi stranger, welcome this planet named  "earth", here you will find information about all the countries of this world.</h1>
                <Link to='/home'>
                    <button className="initial">Start experience</button>
                </Link>
            </div>
        </div>
    );
}

export default Landing;