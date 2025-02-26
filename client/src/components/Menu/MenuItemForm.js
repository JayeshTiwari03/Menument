import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "../FormStyles.css";

const url = process.env.CONNECT_URL;

const MenuItemForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    isAvailable: true,
    photo: null,
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("isAvailable", formData.isAvailable);
    data.append("photo", formData.photo);

    await axios.post(`${url}/api/saveMenuItem`, data);
    alert("Menu item added!");
    navigate("/menu");
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      isAvailable: true,
      photo: null,
    });
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(`${url}/api/getCategories`);
      setCategories(response.data);
    } catch (error) {
      console.log("Error getting categories", error);
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  return (
    <div className="form-container">
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
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label>
          <input
            type="checkbox"
            checked={formData.isAvailable}
            onChange={(e) =>
              setFormData({ ...formData, isAvailable: e.target.checked })
            }
          />
          Available?
        </label>
        <input
          type="file"
          // accept="image/*"
          name="photo"
          // onChange={(e) =>
          //   setFormData({ ...formData, photo: e.target.files[0] })
          // }
          onChange={handleFileChange}
          required
        />
        <button type="submit">Add Menu Item</button>
      </form>
    </div>
  );
};

export default MenuItemForm;
