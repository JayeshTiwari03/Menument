import React, { useState } from 'react';
import axios from 'axios';
import './FormStyles.css';

const BeverageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    isAlcoholic: false,
    photo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    await axios.post('/api/beverages', data);
    alert('Beverage added!');
    setFormData({
      name: '',
      description: '',
      price: '',
      isAlcoholic: false,
      photo: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Beverage</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={formData.isAlcoholic}
          onChange={(e) => setFormData({ ...formData, isAlcoholic: e.target.checked })}
        />
        Alcoholic
      </label>
      <input
        type="file"
        onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
        required
      />
      <button type="submit">Add Beverage</button>
    </form>
  );
};

export default BeverageForm;