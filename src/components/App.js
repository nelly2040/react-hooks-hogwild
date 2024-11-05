import React, { useState } from 'react';
import HogList from './components/HogList';
import HogFilter from './components/HogFilter';
import HogSort from './components/HogSort';
import HogForm from './components/HogForm';
import { hogData } from './porkers_data';

function App() {
  const [hogs, setHogs] = useState(hogData);
  const [filteredHogs, setFilteredHogs] = useState(hogs);
  const [isGreasedFilter, setIsGreasedFilter] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState(new Set());

  const handleFilterChange = (isGreased) => {
    setIsGreasedFilter(isGreased);
    filterHogs();
  };

  const handleSortChange = (sortBy) => {
    setSortBy(sortBy);
    sortHogs();
  };

  const filterHogs = () => {
    const filtered = hogs.filter(hog => {
      return !isGreasedFilter || hog.greased;
    });
    setFilteredHogs(filtered);
  };

  const sortHogs = () => {
    const sorted = [...filteredHogs].sort((a, b) => {
      return sortBy === 'name' ? a.name.localeCompare(b.name) : a.weight - b.weight;
    });
    setFilteredHogs(sorted);
  };

  const handleHideHog = (name) => {
    setHiddenHogs(prev => {
      const newSet = new Set(prev);
      newSet.has(name) ? newSet.delete(name) : newSet.add(name);
      return newSet;
    });
  };

  const handleAddHog = (newHog) => {
    setHogs(prev => [...prev, newHog]);
    filterHogs();
  };

  const visibleHogs = filteredHogs.filter(hog => !hiddenHogs.has(hog.name));

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