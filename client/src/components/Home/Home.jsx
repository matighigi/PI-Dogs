import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getDogs, filterCreated, filterExisting, orderByName, orderByWeight } from "../../actions";
import {Link} from 'react-router-dom';
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";

export default function Home (){
     const dispatch = useDispatch()
     const allDogs = useSelector((state) => state.dogs) //===> es lo mismo que hacer el map state toProps

     const [filter, setFilter] = useState()
     const [order, setOrder] = useState('')
     const [currentPage, setCurrentPage] = useState(1)
     const [dogsPerPage, setDogsPerPage] = useState(8)
     const indexOfLastDog = currentPage * dogsPerPage // 8
     const indexOfFirstDog = indexOfLastDog - dogsPerPage // 0
     const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)


     const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
     }


     useEffect(() => {
        dispatch(getDogs()) //este tambien reemplaza lo de map dispatch y  map state
     }, [dispatch])


     function handleClick(e) {
        e.preventDefault();//que no se rompa al cargar
        dispatch(getDogs());
     }

     function handleFilter (e) {
        dispatch(filterCreated(e.target.value));
     }


     function handleOrderBy (e) {
        const val = e.target.value;
        if(val.includes('asc')) {
            dispatch(orderByName(val))
            setCurrentPage(1);
            setOrder(`Ordered ${val}`)
        }
        if(val.includes('des')) {
            dispatch(orderByName(val))
            setCurrentPage(1);
            setOrder(`Ordered ${val}`)
        }
        else {
            dispatch(orderByWeight(val))
            setCurrentPage(1);
            setOrder(`Ordered ${val}`)
        }
        setFilter()
     }

     return (
        <div>
            <Link to= '/dog'>Create Dog</Link>
            <h1></h1>
            <button onClick={e=> {handleClick(e)}}>
                Reload all dogs
            </button>
            <div>
                <select onChange={e => handleOrderBy(e)}>
                    <option value='title' selected disabled>Order by</option>
                    <option disabled>Alphabetic</option>
                    <option value = 'asc'>A-Z</option>
                    <option value = 'des'>Z-A</option>
                    <option disabled>Weight</option>                    
                    <option value = 'hea'>Heavier</option>
                    <option value = 'lig'>Lighter</option>
                </select>
                {/* <select>
                    <option value = ''>All</option>
                    <option value = 'hea'>Heavier</option>
                    <option value = 'lig'>Lighter</option>
                </select> */}
                <select>
                    <option value = 'tem'>Temperaments</option>
                </select>
                <select onChange={e => handleFilter(e)}>
                    <option value = 'all'>All</option>
                    <option value = 'created'>Created</option>
                    <option value = 'existing'>Existing</option>
                </select>
                <div>
                    <Paginated
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginated={paginated}
                    />
                </div>
                {currentDogs?.map((e) => {
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