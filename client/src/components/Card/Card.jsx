import React from "react";
import style from './Card.module.css'



export default function Card({name, image, temperaments, weight}) {
    return (
        <div className={style.container}>
            <h3 className={style.name}>{name}</h3>
            <img src={image} alt='image not found' width='200px' height='250px'/>
            <h4>Average Weight: {weight + 'kg'}</h4>
            <h5>{temperaments.map((e) => {
                    return (e.name || e) + ' - ' 
                                })}</h5>
        </div>
    );
};