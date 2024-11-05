import React from 'react';

function HogFilter({ onChange }) {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={e => onChange(e.target.checked)} />
        Show Greased Hogs
      </label>
    </div>
  );
}

export default HogFilter;