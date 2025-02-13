import React from "react";
import "./ShowRecipes.css";

const ShowRecipe = ({ recipe }) => {
  const {
    caloriesPerServing,
    cookTimeMinutes,
    cuisine,
    difficulty,
    image,
    ingredients,
    instructions,
    mealType,
    name,
    prepTimeMinutes,
    rating,
    reviewCount,
    servings,
    tags,
  } = recipe;

  return (
    <div className="recipe-container">
      {/* Header Section */}
      <div className="recipe-header">
        <img src={image} alt={name} className="recipe-image" />
        <div className="recipe-info">
          <h1 className="recipe-name">{name}</h1>
          <div className="recipe-meta">
            <span className="recipe-cuisine">{cuisine}</span>
            <span className="recipe-difficulty">{difficulty}</span>
            <span className="recipe-rating">
              ⭐ {rating} ({reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="recipe-section">
        <h2>Ingredients</h2>
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="recipe-section">
        <h2>Instructions</h2>
        <ol className="instructions-list">
          {instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Additional Details Section */}
      <div className="recipe-section">
        <h2>Additional Details</h2>
        <div className="details-grid">
          <div>
            <strong>Prep Time:</strong> {prepTimeMinutes} minutes
          </div>
          <div>
            <strong>Cook Time:</strong> {cookTimeMinutes} minutes
          </div>
          <div>
            <strong>Servings:</strong> {servings}
          </div>
          <div>
            <strong>Calories per Serving:</strong> {caloriesPerServing}
          </div>
          <div>
            <strong>Meal Type:</strong> {mealType}
          </div>
          <div>
            <strong>Tags:</strong> {tags.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRecipe;
