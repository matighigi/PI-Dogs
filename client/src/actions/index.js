import axios from 'axios';
import { GET_DOGS, FILTER_CREATED, FILTER_EXISTING, FILTER_ALL, ORDER_BY_NAME, ORDER_BY_WEIGHT, ORDER_BY_A_Z, ORDER_BY_Z_A } from './action_types';

export const getDogs = () => {
    return async function(dispatch){
        var json = await axios('http://localhost:3001/dogs');
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}
export const filterCreated = (payload) => {
    return{
        type: FILTER_CREATED,
        payload
    }
}
export const filterExisting = (payload) => {
    return {
        type: FILTER_EXISTING,
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
// export const filterAll = (payload) => {
//     return {
//         type: FILTER_ALL,
//         payload
//     }
// }