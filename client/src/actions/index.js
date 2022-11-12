import axios from 'axios';
import { GET_DOGS, FILTER_CREATED, FILTER_EXISTING, FILTER_ALL } from './action_types';

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
// export const filterAll = (payload) => {
//     return {
//         type: FILTER_ALL,
//         payload
//     }
// }