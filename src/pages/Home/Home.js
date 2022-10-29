import React from "react";
import "./Home.css";
import Search from "../../component/Search/Search";
import Card from "../../component/Card/Card";
import { useState } from "react";
const Home = () => {
  const [recipe, setRecipe] = useState();
  console.log(recipe);
  return (
    <div>
      <Search setRecipe={setRecipe} />
      <div className="resultContainer">
        <Card />
      </div>
    </div>
  );
};

export default Home;
