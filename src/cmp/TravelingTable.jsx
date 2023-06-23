import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTravels, removeTravel, setFilterBy } from '../store/actions/travel.actions';
import { TravelList } from './TravelList';
import '../style/TravelingTable.css';

export default function TravelingTable(props) {
  const travels = useSelector((storeState) => storeState.travelModule.travels);
  const filterBy = useSelector((storeState) => storeState.travelModule.filterBy);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTravels());
  }, []);

  const onRemoveTravel = useCallback(async (travelId) => {
    try {
      dispatch(removeTravel(travelId));
    } catch (error) {
      console.log('error:', error);
    }
  }, []);

  if (!travels) return <div className="loading">Loading...</div>;
  return (
    <section className="travel-page">
      <TravelList travels={travels} onRemoveTravel={onRemoveTravel} />
    </section>
  );
}
