import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../actions";
import style from './SearchBar.module.css'

//creamos el componente SearchBar
export default function SearchBar() {
    //asignamos el useDispactch() a dispatch
    const dispatch = useDispatch()
    //configuramos un estado name
    const [name, setName] = useState('')


    //creamos un handleInputChange para manejar el estado name con el value recibido en el input
    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)//lo que guarda el estado a medida que escribimos en el input

    }
    //creamos un handleSubmit para despachar la accion getNameDogs de actions pasandole el valor name del estado recibido en el input
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getNameDogs(name))
    }

    return (
        <div className={style.container} >
            <input 
            className={style.input}
            type = 'text'
            placeholder="Search..."
            onChange={e => handleInputChange(e)}/>

            <button className={style.btn} type='submit' onClick={e => handleSubmit(e)} setName>Search</button>
        </div>
    )
}