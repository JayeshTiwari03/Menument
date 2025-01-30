import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuList = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get('/api/menu').then((response) => {
            setMenuItems(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Menu</h2>
            <div className="list-container fade-in">
                {menuItems.map((item) => (
                    <div className="card" key={item._id}>
                        <img src={`http://localhost:5000/${item.photo}`} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        <p>{item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuList;