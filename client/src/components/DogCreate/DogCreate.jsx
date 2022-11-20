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
    else if(!input.height){
        errors.height = 'A height is required'
    }
    else if(!input.weight){
        errors.weight = 'A weight is required'
    }
    else if(!input.life_span){
        errors.life_span = 'A life_span is required'
    }
    else if(!input.image){
        errors.image = 'A image is required'
    }
    return errors
}


export default function DogCreate() {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const temps = useSelector((state) => state.temperaments)
    console.log(temps)
    const [errors, setErrors] = useState({})    

      useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch]);

    const [input, setInput] = useState({
        name: "",
        height: "",
        weight: "",
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
        console.log(input)
        dispatch(postDog(input))
        alert('Dog Created')
        setInput({
            name: "",
            height: "",
            weight: "",
            life_span: "",
            image: "",
            temperaments: []
        })
        history.push('/home')
    }

    const handleDelete = (e) => {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temp => temp !== e)
        })
    }

    return(
        <div>
            <Link to = '/home'>
                <button>Back</button>
            </Link>
            <h1>Create your Dog</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input type= 'text' value={input.name} name= "name" onChange={e => handleChange(e)}/>
                    {errors.name && (
                        <p className='error'>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>Height:</label>
                    <input type= 'text' value={input.height} name= 'height' onChange={e => handleChange(e)}/>
                    {errors.height && (
                        <p className='error'>{errors.height}</p>
                    )}
                </div>
                <div>
                    <label>Weight:</label>
                    <input type= 'text' value={input.weight} name= 'weight' onChange={e => handleChange(e)}/>
                    {errors.weight && (
                        <p className='error'>{errors.weight}</p>
                    )}
                </div>
                <div>
                    <label>Life_span:</label>
                    <input type= 'text' value={input.life_span} name= 'life_span' onChange={e => handleChange(e)}/>
                    {errors.life_span && (
                        <p className='error'>{errors.life_span}</p>
                    )}
                </div>
                <div>
                    <label>Image:</label>
                    <input type= 'text' value={input.image} name= 'image' onChange={e => handleChange(e)}/>
                    {errors.image && (
                        <p className='error'>{errors.image}</p>
                    )}
                </div>
                <p></p>
                <select onChange={(e) => handleSelect(e)}>
                    <option hidden>Temperaments</option>
                    {temps?.map((e) => {
                       return <option value = {e.name} key={e.id}>{e.name}</option>
                    })}
                </select>
                <div>
                {/* <ul><li className={style.li}>{input.temperaments.map(el => el + ' ,')}</li></ul> */}
                <p></p>
                <button type='submit'>Create Dog</button>
                </div>
            </form>

            {input.temperaments.map(el => 
                <div>
                    <p>{el}</p>
                    <button onClick={() => handleDelete(el)}>X</button>
                </div> 
                )}
        </div>
    )
}
