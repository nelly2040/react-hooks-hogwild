import React, { useState } from 'react';
import HogList from './HogList';
import HogFilter from './HogFilter';
import HogSort from './HogSort';
import HogForm from './HogForm';
import porkersData from './porkers_data.js';

function App() {
  const [hogs, setHogs] = useState(porkersData); // Initial hog data from porkers_data.js
  const [filteredHogs, setFilteredHogs] = useState(hogs); // State for filtered hogs
  const [isGreasedFilter, setIsGreasedFilter] = useState(false); // Filter state
  const [sortBy, setSortBy] = useState('name'); // Sort state ('name' or 'weight')
  const [hiddenHogs, setHiddenHogs] = useState(new Set()); // Set to track hidden hogs

  const handleFilterChange = (isGreased) => {
    setIsGreasedFilter(isGreased);
    filterHogs();
  };

  const handleSortChange = (sortBy) => {
    setSortBy(sortBy);
    sortHogs();
  };

  const filterHogs = () => {
    const filtered = hogs.filter((hog) => {
      if (isGreasedFilter) {
        return hog.greased;
      }
      return true;
    });
    setFilteredHogs(filtered);
  };

  const sortHogs = () => {
    const sorted = [...filteredHogs].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.weight - b.weight;
      }
    });
    setFilteredHogs(sorted);
  };

  const handleHideHog = (name) => {
    const newHiddenHogs = new Set(hiddenHogs);
    if (newHiddenHogs.has(name)) {
      newHiddenHogs.delete(name);
    } else {
      newHiddenHogs.add(name);
    }
    setHiddenHogs(newHiddenHogs);
  };

  const handleAddHog = (newHog) => {
    setHogs([...hogs, newHog]);
    filterHogs();
  };

  const visibleHogs = filteredHogs.filter((hog) => !hiddenHogs.has(hog.name));

  return (
    <div className="ui grid container">
      <h1>Hogs</h1>
      <HogFilter onChange={handleFilterChange} />
      <HogSort onChange={handleSortChange} />
      <HogList hogs={visibleHogs} onHideHog={handleHideHog} />
      <HogForm onAddHog={handleAddHog} />
    </div>
  );
}

export default App;