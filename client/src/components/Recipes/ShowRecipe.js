import React from "react";
import "./Recipes.css";

const ShowRecipe = ({ recipe }) => {
  return (
    <div className="recipe-container">
      <h2>Ingredients</h2>
      {/* <ol>
        {recipe[0]?.Object.keys((list) => (
          <li>{list}</li>
        ))}
      </ol>
      <h2>Instructions</h2>
      <ol>
        {recipe[1]?.Object.keys((list) => (
          <li>{list}</li>
        ))}
      </ol> */}
      <ol className="recipes-list">
        {Object.keys(recipe[0]).map((list) => (
          <li>{recipe[0][list]}</li>
        ))}
      </ol>
      <h2>Instructions</h2>
      <ol className="recipes-list">
        {Object.keys(recipe[1]).map((list) => (
          <li>{recipe[1][list]}</li>
        ))}
      </ol>
    </div>
  );
};

export default ShowRecipe;
