import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowRecipe from "./ShowRecipe";
import "./Recipes.css";

const SearchRecipes = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState([]);

  useEffect(() => {
    const timer = setTimeout(fetchRecipes, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const fetchRecipes = () => {
    if (cache[query]) {
      setResults(cache[query]);
      return;
    }

    try {
      axios
        .get(`https://dummyjson.com/recipes/search?q=${query}`)
        .then((response) => {
          let data = response.data.recipes;
          setResults(data);
          setCache((prev) => ({ ...prev, [query]: data }));
        });
    } catch (error) {
      console.log("Failed", error);
    }
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleRecipe = (ingredients, instructions) => {
    setShowRecipe(true);
    let recipe = new Array({ ...ingredients }, { ...instructions });
    console.log("rec obj?", recipe);
    setSelectedRecipe(recipe);
    setShowResults(false);
  };

  return (
    <div className="recipe-container">
      <input
        type="search"
        placeholder="Search for recipes..."
        onChange={handleQuery}
        onClick={() => setShowResults(true)}
        // onBlur={() => setShowResults(false)}
      />
      {showResults && (
        <>
          <div className="results-container">
            {results?.map((result) => (
              <div
                className="result"
                key={result.id}
                onClick={() =>
                  handleRecipe(result.ingredients, result.instructions)
                }
              >
                {result.name}
              </div>
            ))}
          </div>
        </>
      )}
      {showRecipe && <ShowRecipe recipe={selectedRecipe} />}
    </div>
  );
};

export default SearchRecipes;
