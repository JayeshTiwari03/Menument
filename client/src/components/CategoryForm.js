import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/categories', { name });
    alert('Category added!');
    setName('');
  };

  return (
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
  );
};

export default CategoryForm;