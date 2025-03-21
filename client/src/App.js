import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import CategoryForm from "./components/Category/CategoryForm";
import MenuItemForm from "./components/Menu/MenuItemForm";
import BeverageForm from "./components/Beverage/BeverageForm";
import MenuList from "./components/Menu/MenuList";
import BeverageList from "./components/Beverage/BeverageList";
import SearchRecipes from "./components/Recipes/SearchRecipes";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/add-category" element={<CategoryForm />} />
            <Route path="/add-menu-item" element={<MenuItemForm />} />
            <Route path="/add-beverage" element={<BeverageForm />} />
            <Route path="/menu" element={<MenuList />} />
            <Route path="/beverages" element={<BeverageList />} />
            <Route path="/recipes" element={<SearchRecipes />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
