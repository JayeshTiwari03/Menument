import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowRecipe from "./ShowRecipe";
import ShimmerList from "../Shimmers/ShimmerList";
import "./Recipes.css";

const SearchRecipes = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(fetchRecipes, 1000);
    setLoading(true);

    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  }, [query]);

  const fetchRecipes = () => {
    setLoading(true);
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
      setLoading(false);
    } catch (error) {
      console.log("Failed", error);
    }
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleRecipe = (recipe) => {
    setShowRecipe(true);
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
      {showResults ? (
        loading ? (
          <ShimmerList />
        ) : (
          <>
            <div className="results-container">
              {results?.map((result) => (
                <div
                  className="result"
                  key={result.id}
                  onClick={() => handleRecipe(result)}
                >
                  {result.name}
                </div>
              ))}
            </div>
          </>
        )
      ) : null}
      {showRecipe && <ShowRecipe recipe={selectedRecipe} />}
    </div>
  );
};

export default SearchRecipes;
