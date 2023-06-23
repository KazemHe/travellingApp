import React from 'react';
import '../style/TravelPreview.css';

export function TravelPreview({ travel, onRemoveTravel }) {
  return (
    <tr className="travel-preview">
      <td>{travel.country}</td>
      <td>{travel.start}</td>
      <td>{travel.end}</td>
      <td>{travel.note}</td>
      <td>
        <button onClick={() => onRemoveTravel(travel._id)}>X</button>
      </td>
    </tr>
  );
}
