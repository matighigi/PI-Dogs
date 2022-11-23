import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";
import style from './Detail.module.css'

//creamos el componente Detail para acceder en cada perro respectivamente, pasandole como argumento las propiedades a renderizar
export default function Detail(props) {
    console.log(props);
    //asignamos el useDispach() al la constante 'dispatch'
    const dispatch = useDispatch()

    //despachamos la accion getDetail traida de las 'actions' pasandole por argumento un id especifico
    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    //traemos el estado detail del reducer 
    const myDog = useSelector((state) => state.detail)

    return (
        <div className={style.body}>
        <div className={style.container}>
            <Link to= '/home'>
                <button className={style.btn}>Back</button>
            </Link>
            {
                myDog.length > 0 ? 
                <div>
                    <h3>Hi, I Am <u>{myDog[0].name}</u>!</h3>
                    <img src = {myDog[0].img ? myDog[0].img : myDog[0].image} alt='' width='300px' height='300px'/>
                    <h3><u>Average height:</u> {myDog[0].height} cm</h3>
                    <h3><u>Average weight:</u> {myDog[0].weight} kg</h3>
                    <h3><u>Life-span:</u> {myDog[0].life_span} years</h3>
                    <h4><u>Temperaments:</u> {!myDog[0].createdInDb ? myDog[0].temperaments.map(el => ` ${el} -`) : myDog[0].temperaments.map(el => el.name + ' - ')}</h4>
                </div> : <div className={style.loading}><p>Loading..</p></div>
            }
        </div>
        </div>
    )
}