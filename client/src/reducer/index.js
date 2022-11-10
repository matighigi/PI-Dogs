import {GET_DOGS} from '../actions/action_types'


const initialState = {
    dogs: []
}


const rootReducer  = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload
            }
            
        default:
            return {...state}
    }
};

export default rootReducer;