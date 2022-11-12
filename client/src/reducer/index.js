import {GET_DOGS, FILTER_CREATED, FILTER_EXISTING, FILTER_ALL} from '../actions/action_types'


const initialState = {
    allDogs: [],
    dogs: []
}


const rootReducer  = (state = initialState, action) => {
    switch (action.type) {

        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                dogs: action.payload
            }
            
        case FILTER_CREATED:
            const allDogs = state.allDogs
            const createdFilter = action.payload === 'created' ? allDogs.filter(el => el.createdInDb) : allDogs.filter(el => !el.createdInDb)
            return {
                ...state,
                dogs: createdFilter
            }

        case FILTER_EXISTING:
            const existingFilter = action.payload === 'existing' ? allDogs.filter(el => !el.createdInDb) : allDogs
            return {
                ...state,
                dogs: existingFilter
            }
        // case FILTER_ALL:
        //     const filterAll = action.payload === 'all' ? allDogs : allDogs
        //     return {
        //         ...state,
        //         dogs: filterAll
        //     }

        default:
            return {...state}
    }
};
// console.log(rootReducer())

export default rootReducer;