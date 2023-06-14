import React from 'react'
// import { Link } from 'react-router-dom'

export function TravelPreview({ travel, onRemoveTravel }) {

    return (
        <article className='travel-preview info' >
            {/* <section onClick={() => onSelectTravelId(travel._id)} className="info"> */}

            {/* <Link to={`/travel/${travel._id}`} className="info"> */}

            {/* <img src={require(`../assets/imgs/travel.png`)} /> */}
            {/* <section className="actions"> */}


                <button onClick={() => onRemoveTravel(travel._id)} >X</button>
                {travel.country}

                {travel.start}
                {travel.end}
                {travel.note}

            {/* </section> */}
            {/* </Link> */}
            {/* </section> }
            {/* <section className="actions">
                <button onClick={() => onRemoveTravel(travel._id)} >X</button>
            </section> */}

            {/* <Link to={`/travel/edit/${travel._id}`}>Edit</Link> */}

        </article>
    )
}
