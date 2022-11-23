import React from "react";
import style from './LandingPage.module.css'
import {Link} from 'react-router-dom';

//creamos el componente LandingPage
const LandingPage = () => {
    return(
        <div className={style.container}>
            <h1 className={style.welcome}>Welcome to Henry Dogs</h1>
            <h4 className={style.h4}>To enter the page, please, press the button</h4>
            <Link to = '/home'>
                <button className={style.btn}><strong>Enter</strong></button>
            </Link>
            
        </div>
    )
}


export default LandingPage