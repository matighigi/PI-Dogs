import React from "react";
import style from './Paginated.module.css'

export default function Paginated({dogsPerPage, allDogs, paginated, currentPage}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }


    return(
        <nav>
            <ul className={style.pagination}>
                
                {
                pageNumbers && pageNumbers.map((number) => {
                    return(
                        <li key={number}>
                            <button key={number} 
                                    className={style.pageBtn} 
                                    onClick={() => paginated(number)}> {number} </button>
                        </li>
                     )
                })
                }
            </ul>
        </nav>
    )
}