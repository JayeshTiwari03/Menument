import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import CategoryForm from './components/CategoryForm';
import MenuItemForm from './components/MenuItemForm';
import BeverageForm from './components/BeverageForm';
import MenuList from './components/MenuList';
import BeverageList from './components/BeverageList';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/add-category" element={<CategoryForm />} />
        <Route path="/add-menu-item" element={<MenuItemForm />} />
        <Route path="/add-beverage" element={<BeverageForm />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="/beverages" element={<BeverageList />} />
      </Routes>
    </Router>
  );
}

export default App;