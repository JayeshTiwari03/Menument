import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Recipes.css";

const SearchRecipes = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/search?q=${query}`)
      .then((response) => {
        setResults(response.data.recipes);
      });
    // fetch(`https://dummyjson.com/recipes/search?q=${query}`)
    //   .then((response) => response.json())
    //   .then((results) => setResults(results.recipes));
    // setResults(response.data);
  }, []);

  return (
    <div className="recipe-container">
      <input type="search" placeholder="Search for recipes..." />
      <div className="results-container">
        {results?.map((result) => (
          <div className="" key={result.id}>
            {result.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchRecipes;

{
  /* <input
        list="recipes"
        name="recipe"
        id="recipe"
        placeholder="Search recipes..."
      />
      <datalist id="recipes">
        <option value="Samosa" />
        <option value="Kachori" />
        <option value="Poha" />
        <option value="Jalebi" />
      </datalist> */
}
