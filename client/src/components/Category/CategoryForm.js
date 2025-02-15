import React, { useEffect, useState } from "react";
import axios from "axios";
import "../FormStyles.css";
import "./CategoryList.css";

const CategoryForm = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:5000/api/saveCategory", { name });
      alert("Category added!");
      setName("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    axios
      .get("http://localhost:5000/api/getCategories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => console.log(error));
  };

  const handleEditCategory = (name, id) => {
    axios
      .put("http://localhost:5000/api/editCategory", { name, _id: id })
      .then((res) => {
        setCategories(...categories.push(res.data));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form-container">
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
      <div className="list-categories">
        List of Categories:
        {categories?.map((category) => (
          <div
            key={category._id}
            className="category-list"
            onClick={() => handleEditCategory(category.name, category._id)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryForm;
