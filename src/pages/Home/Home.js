import React from "react";
import "./Home.css";
import Search from "../../component/Search/Search";
import Card from "../../component/Card/Card";
import homeSvg from "../../assets/home.svg";
import { useState } from "react";

const Home = () => {
  const [recipe, setRecipe] = useState();

  return (
    <div>
      <Search setRecipe={setRecipe} />
      {recipe ? (
        <div className="resultContainer">
          {recipe.map((item, i) => (
            <Card key={i} recipe={item.recipe} />
          ))}
        </div>
      ) : (
        <div className="homeImg">
          <img src={homeSvg} alt="" />
        </div>
      )}
    </div>
  );
};

export default Home;
