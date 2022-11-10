import axios from 'axios';
import { GET_DOGS } from './action_types';

export const getDogs = () => {
    return async function(dispatch){
        var json = await axios('http://localhost:3001/dogs');
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}
