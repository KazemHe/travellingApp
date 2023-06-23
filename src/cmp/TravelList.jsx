import React from 'react';
import { TravelPreview } from './TravelPreview';

import '../style/TravelList.css';

export function TravelList({ travels, onRemoveTravel }) {
  return (
    <section className="travel-list">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {travels.map((travel) => (
            <TravelPreview key={travel._id} travel={travel} onRemoveTravel={onRemoveTravel} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
