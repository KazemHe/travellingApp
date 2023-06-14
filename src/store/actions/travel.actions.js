import { travelService } from "../../services/travel.service"
import { REMOVE_TRAVEL, SET_FILTER_BY, SET_TRAVELS } from "../reducers/travel.reducer"

export function loadTravels() {
    return async (dispatch, getState) => {
        try {
            const travels = await travelService.getTravels(getState().travelModule.filterBy)
            const action = {
                type: SET_TRAVELS,
                travels
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function removeTravel(travelId) {
    return async (dispatch) => {
        try {
            await travelService.deleteTravel(travelId)
            const action = { type: REMOVE_TRAVEL, travelId }
            dispatch(action)
            return 'Removed!'
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: SET_FILTER_BY, filterBy })
    }
}