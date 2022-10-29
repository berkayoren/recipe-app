import React from "react";
import { useLocation } from "react-router-dom";
import "./Details.css";
import dietSvg from "../../assets/diet.svg";

const Details = () => {
  const location = useLocation();
  const recipe = location.state.recipe;
  return (
    <div className="detailsContainer">
      <div className="header">
        <h1>{recipe.label}</h1>
        <img src={dietSvg} alt="" />
      </div>
    </div>
  );
};

export default Details;
