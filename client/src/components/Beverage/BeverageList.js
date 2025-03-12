import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBeverageData, isLoading } from "../../store/slices/beveragesSlice";
import "../ListStyles.css";

// const apiUrl = process.env.REACT_APP_API_BASE_URL;
const apiUrl = "http://localhost:5000";

const BeverageList = () => {
  // const [beverages, setBeverages] = useState([]);
  const beverageData = useSelector((state) => state.beverage.apiData);
  const dispatch = useDispatch();

  const beverageItem = useMemo(() => beverageData, [beverageData]);

  useEffect(() => {
    if (beverageData.length === 0) {
      fetchBeverageData();
    }
  }, [beverageData]);

  const fetchBeverageData = () => {
    dispatch(isLoading(true));
    try {
      axios.get(`${apiUrl}/api/getBeverages`).then((response) => {
        // setBeverages(response.data);
        dispatch(setBeverageData(response.data));
        dispatch(isLoading(false));
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="list-container">
      <h2>Beverages</h2>
      <div className="list-container fade-in">
        {beverageItem?.map((beverage) => (
          <div key={beverage._id} className="card">
            <h3>{beverage.name}</h3>
            <p>{beverage.description}</p>
            <p>Price: ${beverage.price}</p>
            <p>{beverage.isAlcoholic ? "Alcoholic" : "Non-Alcoholic"}</p>
            <img
              src={`${apiUrl}/${beverage.photo}`}
              alt={beverage.name}
              width="100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeverageList;
