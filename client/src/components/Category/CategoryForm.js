import React, { useRef, useState } from 'react';
import axios from 'axios';
import '../FormStyles.css';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const categoryRef = useRef();

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      await axios.post('http://localhost:5000/api/saveCategory', { name });
      alert('Category added!');
      setName('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    categoryRef.current.focus(); // Focus the input field
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
          ref={categoryRef}
          required
        />
        <button type="submit" onClick={handleClick}>Add Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;
