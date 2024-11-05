import React, { useState } from 'react';

function HogForm({ onAddHog }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [highestMedal, setHighestMedal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = { name, image, specialty, weight: parseInt(weight), greased, highestMedal };
    onAddHog(newHog);
    setName('');
    setImage('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setHighestMedal('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" required />
      <input value={specialty} onChange={e => setSpecialty(e.target.value)} placeholder="Specialty" required />
      <input value={weight} type="number" onChange={e => setWeight(e.target.value)} placeholder="Weight" required />
      <label>
        <input type="checkbox" checked={greased} onChange={e => setGreased(e.target.checked)} />
        Greased
      </label>
      <input value={highestMedal} onChange={e => setHighestMedal(e.target.value)} placeholder="Highest Medal" required />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;