import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {postDog, getTemperaments} from "../../actions/index";
import { useSelector, useDispatch } from 'react-redux';
import style from './DogCreate.module.css'


function validate(input) {
    let errors = {};
    if(!input.name){
        errors.name = 'A name is required'
    }
    else if(!input.minHeight){
        errors.minHeight = 'A MinHeight is required'
    }
    else if(!input.maxHeight){
        errors.maxHeight = 'A MaxHeight is required'
    }
    else if(!input.minWeight){
        errors.minWeight = 'A MinWeight is required'
    }
    else if(!input.maxWeight){
        errors.maxWeight = 'A MaxWeight is required'
    }
    else if(!input.life_span){
        errors.life_span = 'A life_span is required'
    }
    return errors
}


export default function DogCreate() {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const temps = useSelector((state) => state.temperaments)
    // console.log(temps)   

    const [errors, setErrors] = useState({})    

      useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch]);

    const [input, setInput] = useState({
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        life_span: "",
        image: "",
        temperaments: []
    })
    
  
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    const handleSelect = (e) => {
        setInput({
            ...input,
            temperaments: [...input.temperaments, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const avgHeight = (Number(input.minHeight) + Number(input.maxHeight)) / 2
        const avgWeight = (Number(input.minWeight) + Number(input.maxWeight)) / 2
        const img = input.image || 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'
        const dog = {
            name: input.name,
            height: avgHeight.toFixed(2),
            weight: avgWeight.toFixed(2),
            life_span: input.life_span,
            temperaments: input.temperaments,
            image: img
        }
        console.log(input)
        dispatch(postDog(dog))
        alert('Dog Created')
        history.push('/home')
    }

    const handleDelete = (e) => {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temp => temp !== e)
        })
    }

    return(
        <div className={style.body}>
        <div className={style.container}>
            <h1>Create your Dog</h1>
            <Link to = '/home'>
                <button className={style.btnBack}>Back</button>
            </Link>
            <form onSubmit={e => handleSubmit(e)} className={style.form} autocomplete="off">
                <div>
                    <label>Name:</label>
                    <input className= {style.input} type= 'text' value={input.name} name= "name" onChange={e => handleChange(e)}/>
                    {errors.name && (
                        <p className={style.error}>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>Min-Height:</label>
                    <input className= {style.input} type= 'text' value={input.minHeight} name= 'minHeight' onChange={e => handleChange(e)}/>
                    <label> cm</label>
                    {errors.minHeight && (
                        <p className={style.error}>{errors.minHeight}</p>
                    )}
                </div>
                <div>
                    <label>Max-Height:</label>
                    <input className= {style.input} type= 'text' value={input.maxHeight} name= 'maxHeight' onChange={e => handleChange(e)}/>
                    <label> cm</label>
                    {errors.maxHeight && (
                        <p className={style.error}>{errors.maxHeight}</p>
                    )}
                </div>
                <div>
                    <label>Min-Weight:</label>
                    <input className= {style.input} type= 'text' value={input.minWeight} name= 'minWeight' onChange={e => handleChange(e)}/>
                    <label> kg</label>
                    {errors.minWeight && (
                        <p className={style.error}>{errors.minWeight}</p>
                    )}
                </div>
                <div>
                    <label>Max-Weight:</label>
                    <input className= {style.input} type= 'text' value={input.maxWeight} name= 'maxWeight' onChange={e => handleChange(e)}/>
                    <label> kg</label>
                    {errors.maxWeight && (
                        <p className={style.error}>{errors.maxWeight}</p>
                    )}
                </div>
                <div>
                    <label>Life_span:</label>
                    <input className= {style.input} type= 'text' value={input.life_span} name= 'life_span' onChange={e => handleChange(e)}/>
                    <label> years</label>
                    {errors.life_span && (
                        <p className={style.error}>{errors.life_span}</p>
                    )}
                </div>
                <div>
                    <label>Image(url):</label>
                    <input className= {style.input} type= 'text' value={input.image} name= 'image' onChange={e => handleChange(e)}/>
                </div>
                <p></p>
                <select onChange={(e) => handleSelect(e)} className={style.select}>
                    <option hidden>Temperaments</option>
                    {temps?.map((e) => {
                       return <option value = {e.name} key={e.id}>{e.name}</option>
                    })}
                </select>
                <div>
                <p></p>
                <button type='submit' className={style.btnCreate} disabled={!input.name || !input.minHeight || !input.maxHeight || !input.minWeight || !input.maxWeight || !input.life_span}>Create Dog</button>
                </div>
            </form>

            {input.temperaments.map(el => 
                <div className={style.temperaments}>
                    <button onClick={() => handleDelete(el)} className={style.temps}>{el}</button>
                </div> 
                )}
        </div>
        </div>
    )
}
