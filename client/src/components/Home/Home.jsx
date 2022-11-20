import React from "react";
//importo los hooks que uso de react
import { useState, useEffect } from "react";
//importo los hooks  que uso de react-redux
import { useDispatch, useSelector } from 'react-redux';
//importo las actions que uso en este componente
import { getDogs, filterCreated, orderByName, orderByWeight, getTemperaments, filterTemps} from "../../actions";
import {Link} from 'react-router-dom';
//importo los componentes que uso
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import SearchBar from "../SearchBar/SearchBar";
import style from './Home.module.css'

export default function Home (){
     const dispatch = useDispatch()
     const allDogs = useSelector((state) => state.dogs) //===> es lo mismo que hacer el map state toProps
     const allTemps = useSelector((state) => state.temperaments)
    //  console.log(allTemps);

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


     useEffect(()=>{
        dispatch(getTemperaments())
    },[dispatch]);

     function handleRefresh(e) {
        e.preventDefault()
        dispatch(getDogs())
     } 
     function handleFilterCreated (e) {
        dispatch(filterCreated(e.target.value));
     }
     
     function handleFilterByTemp(e){
        e.preventDefault();
        dispatch(filterTemps(e.target.value));
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
            <div className={style.NavBar}>
                <h1 className={style.HenryDogs}><u>Henry Dogs</u></h1>
                <div>
                <Link to= '/dog'><button className={style.create}>Create Dog</button></Link>
                </div>
                <button className={style.reload} onClick={e=> {handleRefresh(e)}}>
                    Reload all dogs
                </button>
            
                <SearchBar/>
            
                    <div className={style.filters}>
                        <select className={style.filter} onChange={e => handleOrderBy(e)}>
                            <option value='default' selected disabled>Order by</option>
                            <option disabled>Alphabetic</option>
                            <option value = 'asc'>A-Z</option>
                            <option value = 'des'>Z-A</option>
                            <option disabled>Weight</option>                    
                            <option value = 'hea'>Heavier</option>
                            <option value = 'lig'>Lighter</option>
                        </select>
                        <select className={style.filter} onChange={e => handleFilterByTemp(e)}>
                            <option hidden>Temperaments</option>
                            {allTemps.map((e) => {
                                return <option value={e.name} key={e.id}>{e.name}</option>
                            })}
                        </select>
                        <select className={style.filter} onChange={e => handleFilterCreated(e)}>
                            <option value = 'default' selected='defaultValue' disabled>Default</option>
                            <option value = 'created'>Created</option>
                            <option value = 'existing'>Existing</option>
                        </select>
                    </div>
            
                <div>
                    <Paginated
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginated={paginated}
                    />
                </div>
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
     )

}