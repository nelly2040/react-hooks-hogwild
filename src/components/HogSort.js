import React from 'react';

function HogSort({ onChange }) {
  return (
    <div>
      <select onChange={e => onChange(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </div>
  );
}

export default HogSort;