import React, { useState } from 'react';

function HogTile({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui eight wide column">
      <div className="ui card" onClick={() => setShowDetails(!showDetails)}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <div className="header">{hog.name}</div>
        </div>
        {showDetails && (
          <div className="content">
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal: {hog.highestMedal}</p>
          </div>
        )}
        <button onClick={() => onHideHog(hog.name)}>Hide</button>
      </div>
    </div>
  );
}

export default HogTile;