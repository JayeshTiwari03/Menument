import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isLoading, setMenuData } from "../../store/slices/menuSlice";
import axios from "axios";
import "../ListStyles.css";

const MenuList = () => {
  // const [menuItems, setMenuItems] = useState([]);
  const menuData = useSelector((state) => state.menu.apiData);
  const loading = useSelector((state) => state.menu.loading);
  const dispatch = useDispatch();


  const menuItems = useMemo(() => menuData, [menuData]);

  useEffect(() => {
    if (menuData.length === 0) {
      fetchMenuItems();
    }
  }, [menuData]);

  const fetchMenuItems = () => {
    dispatch(isLoading(true));
    axios
      .get("http://localhost:5000/api/getMenu")
      .then((response) => {
        // setMenuItems(response.data);
        dispatch(setMenuData(response.data));
        dispatch(isLoading(false));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="list-container">
      <h2>Menu</h2>
      <div className="list-container fade-in">
        {menuItems?.map((item) => (
          <div className="card" key={item._id}>
            <img
              src={`http://localhost:5000/${item.photo}`}
              alt={item.name}
              width="100"
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>{item.isVeg ? "Available" : "Unavailable"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
