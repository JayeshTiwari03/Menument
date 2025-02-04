import React, { useState } from 'react';
import axios from 'axios';
import './FormStyles.css';

const CategoryForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/categories', { name });
    alert('Category added!');
    setName('');
  };

  return (
    <div className='form-container'>

      <form onSubmit={handleSubmit}>
        <h2>Add Category</h2>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;