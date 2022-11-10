import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from "../actions";
import {Link} from 'react-router-dom';
import Card from "./Card";

export default function Home (){
     const dispatch = useDispatch()
     const allDogs = useSelector((state) => state.dogs) //===> es lo mismo que hacer el map state toProps

     useEffect(() => {
        dispatch(getDogs()) //este tambien reemplaza lo de map dispatch y  map state
     }, [dispatch])


     function handleClick(e) {
        e.preventDefault();//que no se rompa al cargar
        dispatch(getDogs());
     }

     return (
        <div>
            <Link to= '/dog'>Create Dog</Link>
            <h1></h1>
            <button onClick={e=> {handleClick(e)}}>
                Reload all dogs
            </button>
            <div>
                <select>
                    <option value = 'asc'>A-Z</option>
                    <option value = 'des'>Z-A</option>                    
                    <option value = 'hea'>Heavier</option>
                    <option value = 'lig'>Lighter</option>
                </select>
                <select>
                    <option value = 'tem'>Temperaments</option>
                </select>
                <select>
                    <option>All</option>
                    <option value = 'cre'>Created</option>
                    <option value = 'exi'>Existing</option>
                </select>
                {allDogs?.map((e) => {
                        return(
                            <fragment>
                                <Link to= {'/home/' + e.id}>
                                    <Card name={e.name} image={e.image}/>
                                </Link>
                            </fragment>
                        )
                    })}
            </div>
        </div>
     )

}