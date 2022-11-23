import {GET_DOGS, FILTER_CREATED, ORDER_BY_NAME, ORDER_BY_WEIGHT, GET_NAME_DOGS, GET_TEMPERAMENTS, POST_DOG, GET_DETAIL, FILTER_BY_TEMP, /*DELETE_DOG*/} from '../actions/action_types'

//creamos los estados iniciales
const initialState = {
    allDogs: [],
    dogs: [],
    temperaments: [],
    detail: []
}

//creamos el rootReducer con los estados iniciales y sus acciones.
const rootReducer  = (state = initialState, action) => {

    switch (action.type) {
        //traemos todos los perros
        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                dogs: action.payload
            }
        //filtramos los perros creados
        case FILTER_CREATED:
            const allDogs = state.allDogs
            const createdFilter = action.payload === 'created' ? allDogs.filter(el => el.createdInDb) : allDogs.filter(el => !el.createdInDb)
            return {
                ...state,
                dogs: createdFilter
            }
        //filtramos los perros de acuerdo a un temperamento especifico
        case FILTER_BY_TEMP:
            const tempFilter = state.allDogs.filter(el => {
                if(el.createdInDb)return el.temperaments.map(e => e.name)?.includes(action.payload)
                else return el.temperaments?.includes(action.payload)
            })
            
            return {
                ...state,
                dogs: tempFilter
            }
        //ordenamos los perros segun el nombre de forma ascendente y descendente
        case ORDER_BY_NAME:
            let sortedArr = state.allDogs.sort((a,b) => {
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
        //ordenamos los perros segun el peso de forma ascendente y descendente
        case ORDER_BY_WEIGHT:
            const orderedDogs = state.allDogs.sort((a,b) => {
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
        //traemos perro especifico segun un nombre
        case GET_NAME_DOGS:
            return {
                ...state,
                dogs: action.payload
            }
        //creamos un perro
        case POST_DOG:
            return {
                ...state
            }
        //traemos los temperamentos
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload
            }
        //traemos el detalle de un perro especifico
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        // case DELETE_DOG:
        //     return {
        //         ...state,
        //         dogs: state.dogs.filter(el => el.name !== action.payload),
        //         allDogs: state.allDogs.filter(el => el.name !== action.payload)
        //     }

        default:
            return {...state}
    }
};

export default rootReducer;