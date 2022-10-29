import React from "react";
import { useState } from "react";
import "./Search.css";
import axios from "axios";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "3161a284";
const APP_KEY = "a5ffabaa8e1de132cadafc34ed2f7b6b";

const Search = ({ setRecipe }) => {
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const [value, setValue] = useState("");
  const url = `https://api.edamam.com/search?q=${value}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  const getRecipe = async (e) => {
    e.preventDefault();
    if (value === "") return;
    else {
      const result = await axios.get(url);

      setRecipe(result.data.hits);
    }
    setValue("");
  };

  return (
    <div className="search">
      <h2>Food App</h2>
      <div className="formContainer">
        <form onSubmit={getRecipe}>
          <input
            className="food"
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button>Search</button>
        </form>
        <select
          className="foodSelect"
          name="mealTypes"
          id="mealTypes"
          onChange={(e) => setMeal(e.target.value)}
        >
          {mealTypes.map((item, i) => (
            <option key={i} value={item.toLowerCase()}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Search;
