import React, { useState } from "react";
import axios from "axios";
import "../FormStyles.css";

const BeverageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    isAlcohol: false,
    photo: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const dataToSubmit = {
      ...formData,
      price: parseFloat(formData.price),
    };

    console.log("Form Data before submission:", dataToSubmit);

    // Log FormData correctly
    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }

    await axios.post("http://localhost:5000/api/saveBeverage", dataToSubmit);
    alert("Beverage added!");
    setFormData({
      name: "",
      description: "",
      price: "",
      isAlcohol: false,
      photo: null,
    });
  };

  return (
    <div className="form-container">
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
        <label>
          <input
            type="checkbox"
            checked={formData.isAlcohol}
            onChange={(e) =>
              setFormData({ ...formData, isAlcohol: e.target.checked })
            }
          />
          Alcohol
        </label>
        <input
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, photo: e.target.files[0] })
          }
          required
        />
        <button type="submit">Add Beverage</button>
      </form>
    </div>
  );
};

export default BeverageForm;
