import React, { useState } from 'react';
import axios from 'axios';
import './FormStyles.css';

const MenuItemForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    isAvailable: true,
    photo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData();
    // for (const key in formData) {
    //   data.append(key, formData[key]);
    // }
    await axios.post('http://localhost:5000/api/menuItem', formData);
    alert('Menu item added!');
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      isAvailable: true,
      photo: null,
    });
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h2>Add Menu Item</h2>
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
        <input
          type="text"
          placeholder="Category ID"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={formData.isVeg}
            onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
          />
          isAvailable?
        </label>
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, photo: e.target.files[0] })}
          required
        />
        <button type="submit">Add Menu Item</button>
      </form>
    </div>
  );
};

export default MenuItemForm;