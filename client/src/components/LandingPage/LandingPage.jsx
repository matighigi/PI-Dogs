import React from "react";
import style from './LandingPage.module.css'
import {Link} from 'react-router-dom';

const LandingPage = () => {
    return(
        <div className={style.div}>
            <h2>Welcome</h2>
            <h5>To enter the page, please, press 'Enter'</h5>
            <Link to = '/home'>
                <button>Enter</button>
            </Link>
        </div>
    )
}


export default LandingPage