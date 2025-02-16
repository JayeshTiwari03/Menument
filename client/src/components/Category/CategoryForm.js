import React, { useEffect, useState } from "react";
import axios from "axios";
import "../FormStyles.css";
import "./CategoryList.css";

const CategoryForm = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [showInput, setShowInput] = useState({});
  const [editedCategory, setEditedCategory] = useState("");

  console.log("showInput", showInput);
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

  const handleEditCategory = (id) => {
    if (editedCategory.length === 0) {
      return;
    }

    axios
      .put("http://localhost:5000/api/editCategory", {
        name: editedCategory,
        _id: id,
      })
      .then((res) => {
        setCategories(...categories.push(res.data));
        setShowInput(false);
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
      <div className="categories-list-container">
        <h2>Categories:</h2>
        {categories?.map(({ _id, name }) => (
          <div className="list-container" key={_id}>
            {showInput?.[_id] ? (
              <form>
                <input
                  type="text"
                  placeholder="Category Name"
                  onChange={(e) => setEditedCategory(e.target.value)}
                  required
                  value={editedCategory}
                />
                <button type="submit" onClick={() => handleEditCategory(_id)}>
                  Save
                </button>
              </form>
            ) : (
              <div key={_id} className="category-list">
                {name}
              </div>
            )}
            <button
              onClick={() =>
                setShowInput((prev) => {
                  if (!prev[_id]) {
                    setEditedCategory(name);
                  }
                  return {
                    ...prev,
                    [_id]: !prev[_id],
                  };
                })
              }
            >
              {showInput?.[_id] ? "Cancel" : "Edit"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryForm;
