import {GET_DOGS, FILTER_CREATED, FILTER_EXISTING, FILTER_ALL, ORDER_BY_NAME, ORDER_BY_WEIGHT, ORDER_BY_Z_A} from '../actions/action_types'


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
            
        // case FILTER_CREATED:
        //     const allDogs = state.allDogs
        //     const createdFilter = action.payload === 'created' ? allDogs.filter(el => el.createdInDb) : allDogs.filter(el => !el.createdInDb)
        //     return {
        //         ...state,
        //         dogs: createdFilter
        //     }

        // case FILTER_CREATED:
        //     const allDogs = state.allDogs
        //     const createdFilter = action.payload === 'created' ? allDogs.filter(el => el.createdInDb) : allDogs
        //     return {
        //         ...state,
        //         dogs: createdFilter
        //     }
        //-------------------------------------------------
        // case FILTER_CREATED:
        //     const allDogs = state.allDogs
        //     const func = allDogs.filter => {
        //         if(action.payload === 'created') {
        //             allDogs.filter(el => el.createdInDb)
        //         }
        //         if(action.payload === 'existing') {
        //             allDogs.filter(el => !el.createdInDb)
        //         }
        //     }
        //     return {
        //         ...state,
        //         dogs: func
        //     }
            //-----------------------------------------------
        // case FILTER_EXISTING:
        //     const existingFilter = action.payload === 'existing' ? allDogs.filter(el => !el.createdInDb) : allDogs.filter(el => el.createdInDb)
        //     return {
        //         ...state,
        //         dogs: existingFilter
        //     }
        // case FILTER_EXISTING:
        //     const existingFilter = action.payload === 'existing' ? allDogs.filter(el => !el.createdInDb) : allDogs
        //     return {
        //         ...state,
        //         dogs: existingFilter
        //     }
        case ORDER_BY_NAME:
            // const dogs = state.dogs
            let sortedArr = state.dogs.sort((a,b) => {
                if(action.payload === 'asc'){
                   if(a.name > b.name) return 1;
                   if(b.name > a.name) return -1;
                   return 0; 
                }
                if(action.payload === 'des') {
                   if(a.name > b.name) return -1;
                   if(b.name > a.name) return 1;
                   return 0; 
                }
            })
            return {
                ...state,
                dogs: sortedArr
            }
        case ORDER_BY_WEIGHT:
            // const dogs = state.dogs
            const orderedDogs = state.dogs.sort((a,b) => {
                if(action.payload === 'hea'){
                    return b.weight - a.weight
                }
                if(action.payload === 'lig'){
                    return a.weight - b.weight
                }
            })
            return {
                ...state,
                dogs: orderedDogs
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