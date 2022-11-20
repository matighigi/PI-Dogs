import React from "react";



export default function Card({name, image, /*temperaments*/}) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt='image not found' width='200px' height='250px'/>
            {/* <h5>{temperaments}</h5> */}
        </div>
    );
};