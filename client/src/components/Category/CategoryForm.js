import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  setCategoryData,
  setLoadingCategories,
} from "../../store/oldRedux/categoryReducers";
import "../FormStyles.css";
import "./CategoryList.css";

const url = process.env.CONNECT_URL;

const CategoryForm = ({
  isLoading,
  categoryData,
  setCategoryData,
  setLoadingCategories,
}) => {
  const [name, setName] = useState("");
  // const [categories, setCategories] = useState([]);
  const [showInput, setShowInput] = useState({});
  const [editedCategory, setEditedCategory] = useState("");

  useEffect(() => {
    if (categoryData.length === 0) {
      fetchCategories();
    }
  }, [categoryData]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post(`${url}/api/saveCategory`, { name }).then((res) => {
        setCategoryData([...categoryData, res.data]);
      });
      alert("Category added!");
      setName("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    setLoadingCategories(true);
    axios
      .get(`${url}/api/getCategories`)
      .then((res) => {
        // setCategories(res.data);
        setCategoryData(res.data);
        setLoadingCategories(false);
      })
      .catch((error) => console.log(error));
  };

  const handleEditCategory = (id) => {
    if (editedCategory.length === 0) {
      return;
    }

    axios
      .put(`${url}/api/editCategory`, {
        name: editedCategory,
        _id: id,
      })
      .then((res) => {
        // setCategories([...categories, res.data]);
        const updatedCategories = categoryData.map((category) =>
          category._id === id ? res.data : category
        );
        setCategoryData(updatedCategories);
        setShowInput((prev) => ({ ...prev, [id]: false }));
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
        {categoryData?.map(({ _id, name }) => (
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

const mapStateToProps = (state) => ({
  isLoading: state.category.loading,
  categoryData: state.category.apiData,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryData: (data) => dispatch(setCategoryData(data)),
  setLoadingCategories: (status) => dispatch(setLoadingCategories(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);

// create actions
// create reducers
// call the reducer in rootReducer
// make dispatch call to save apidata
// use the data from the store
