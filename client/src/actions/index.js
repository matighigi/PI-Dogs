import axios from 'axios';
import { GET_DOGS, FILTER_CREATED, ORDER_BY_NAME, ORDER_BY_WEIGHT, GET_NAME_DOGS, GET_TEMPERAMENTS, POST_DOG, GET_DETAIL, FILTER_BY_TEMP,/* DELETE_DOG*/} from './action_types';

export const getDogs = () => {
    return async function(dispatch){
        var json = await axios('http://localhost:3001/dogs');
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}
export const getNameDogs = (name) => {
    return async function(dispatch){
        try {
          var json = await axios('http://localhost:3001/dogs?name=' + name);
          return dispatch ({
            type: GET_NAME_DOGS,
            payload: json.data
          }) 
        } catch (error) {
            console.log(error)
        }
        
    }
}
export const getTemperaments = () => {
    return async function (dispatch) {
        const json = await axios('http://localhost:3001/temperaments')
        return (
            dispatch({
                type: GET_TEMPERAMENTS,
                payload: json.data
            })
        )
    }
}
// console.log(getTemperaments());

export const postDog = (payload) => {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/dogs', payload)
        console.log(response)
        // return response;
        return dispatch({
            type: POST_DOG,
            payload: response.data
        })
    }
}
export const filterCreated = (payload) => {
    return{
        type: FILTER_CREATED,
        payload
    }
}
export const filterTemps = (payload) => {
    return {
        type: FILTER_BY_TEMP,
        payload
    }
}
export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}
export const orderByWeight = (payload) => {
    return {
        type: ORDER_BY_WEIGHT,
        payload
    }
}
export const getDetail = (id) => {
    return async function (dispatch) {
        try {
            var json = await axios('http://localhost:3001/dogs/' + id);
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
// export const deleteDog = (name) => {
//     return async function (dispatch) {
//         try {
//             var json = await axios.delete(`http://localhost:3001/dogs?name=${name}`)
//             return dispatch({
//                 type: DELETE_DOG,
//                 payload: json.data.dog
//             })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }