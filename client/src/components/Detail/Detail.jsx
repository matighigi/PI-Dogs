import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";

export default function Detail(props) {
    console.log(props);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    },[dispatch])

    const myDog = useSelector((state) => state.detail)

    return (
        <div>
            <Link to= '/home'>
                <button>Back</button>
            </Link>
            {
                myDog.length > 0 ? 
                <div>
                    <h2>Hi, I Am {myDog[0].name}!</h2>
                    <img src = {myDog[0].img ? myDog[0].img : myDog[0].image} alt='' width='500px' height='700px'/>
                    <h2>Average height: {myDog[0].height} cm</h2>
                    <h2>Average weight: {myDog[0].weight} kg</h2>
                    <h2>Life-span: {myDog[0].life_span}</h2>
                    <h4>Temperaments: {!myDog[0].createdInDb ? myDog[0].temperaments +'  ' : myDog[0].temperaments.map(el => el.name + ', ')}</h4>
                </div> : <p>Loading..</p>
            }
        </div>
    )
}