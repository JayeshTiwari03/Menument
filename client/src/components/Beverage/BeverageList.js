import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ListStyles.css";

const BeverageList = () => {
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/getBeverages").then((response) => {
        setBeverages(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="list-container">
      <h2>Beverages</h2>
      {beverages.map((beverage) => (
        <div key={beverage._id}>
          <h3>{beverage.name}</h3>
          <p>{beverage.description}</p>
          <p>Price: ${beverage.price}</p>
          <p>{beverage.isAlcoholic ? "Alcoholic" : "Non-Alcoholic"}</p>
          <img
            src={`http://localhost:5000/${beverage.photo}`}
            alt={beverage.name}
            width="100"
          />
        </div>
      ))}
    </div>
  );
};

export default BeverageList;
