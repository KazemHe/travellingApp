import React, { useState } from 'react';
import { TravelPreview } from './TravelPreview';

import '../style/TravelList.css';

export function TravelList({ travels, onRemoveTravel }) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (property) => {
    if (sortBy === property) {
      // Toggle sort order if the same property is clicked again
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new sort property and default sort order
      setSortBy(property);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (property) => {
    if (sortBy === property) {
      return sortOrder === 'asc' ? '▲' : '▼';
    }
    return null;
  };

  const sortedTravels = [...travels].sort((a, b) => {
    
    if (sortBy === 'country') {
      const valueA = a.country.toLowerCase();
      const valueB = b.country.toLowerCase();
      return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    }
    if (sortBy === 'start') {
      return sortOrder === 'asc' ? a.start.localeCompare(b.start) : b.start.localeCompare(a.start);
    }
    if (sortBy === 'end') {
      return sortOrder === 'asc' ? a.end.localeCompare(b.end) : b.end.localeCompare(a.end);
    }
    if (sortBy === 'note') {
      return sortOrder === 'asc' ? a.note.localeCompare(b.note) : b.note.localeCompare(a.note);
    }
    return 0;
  });

  return (
    <section className="travel-list">
      <table>
        <thead>
          <tr>
            <th>
              Flag
            </th>
            <th onClick={() => handleSort('country')}>
              Country
              {getSortIcon('country')}
            </th>
            <th onClick={() => handleSort('start')}>
              Start Date
              {getSortIcon('start')}
            </th>
            <th onClick={() => handleSort('end')}>
              End Date
              {getSortIcon('end')}
            </th>
            <th onClick={() => handleSort('note')}>
              Note
              {getSortIcon('note')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedTravels.map((travel) => (
            <TravelPreview key={travel._id} travel={travel} onRemoveTravel={onRemoveTravel} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
