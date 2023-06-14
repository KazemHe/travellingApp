import React from 'react'
import { travel, useDispatch, useSelector } from 'react-redux'
import { loadTravels, removeTravel, setFilterBy } from '../store/actions/travel.actions'
import { TravelList } from '../cmp/TravelList'
import { useCallback , useEffect } from 'react'


export default function TravilingTable(props) {

    const travels = useSelector((storeState) => storeState.travelModule.travels)
    const filterBy = useSelector((storeState) => storeState.travelModule.filterBy)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTravels())
    }, [])

    const onRemoveTravel = useCallback(async (travelId) => {
        try {
            dispatch(removeTravel(travelId))
        } catch (error) {
            console.log('error:', error)
        }
    }, [])




    if (!travels) return <div>Loading...</div>
    return (
        <section className='travel-page'>
            {/* <Link to="/travel/edit"><i className="fa-solid fa-circle-plus"></i></Link> */}
            <TravelList travels={travels} onRemoveTravel={onRemoveTravel} /> 
        </section>
    )

}
