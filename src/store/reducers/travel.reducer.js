export const SET_TRAVELS = 'SET_TRAVELS'
export const ADD_TRAVEL = 'ADD_TRAVEL'
export const REMOVE_TRAVEL = 'REMOVE_TRAVEL'
export const UPDATE_TRAVEL = 'UPDATE_TRAVEL'
export const SET_FILTER_BY = 'SET_FILTER_BY'

const INITIAL_STATE = {
    travels: null,
    filterBy: {
        term: ''
    }
}

export function travelReducer(state = INITIAL_STATE, action = {}) {

    switch (action.type) {
        case SET_TRAVELS:
            return {
                ...state,
                travels: action.travels
            }
        case ADD_TRAVEL:
            return {
                ...state,
                travels: [...state.travels, action.travel]
            }
        case REMOVE_TRAVEL:
            return {
                ...state,
                travels: state.travels.filter(travel => travel._id !== action.travelId)
            }
        case UPDATE_TRAVEL:
            return {
                ...state,
                travels: state.travels.map(travel => travel._id === action.travel._id ? action.travel : travel)
            }
        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }

        default:
            return state;
    }
}