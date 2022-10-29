import React from "react";
import "./Search.css";
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Search = () => {
  return (
    <div className="search">
      <h2>Food App</h2>
      <div className="formContainer">
        <form>
          <input className="food" type="text" />
          <button>Search</button>
        </form>
        <select className="foodSelect" name="mealTypes" id="mealTypes">
          {mealTypes.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Search;
