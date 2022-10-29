import React from "react";
import "./Details.css";
import dietSvg from "../../assets/diet.svg";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const recipe = location.state.recipe;

  console.log(recipe);

  return (
    <div className="detailsContainer">
      <div className="header">
        <h1>{recipe.label}</h1>
        <img src={dietSvg} alt="diet" />
      </div>
      <div className="detailsGeneral">
        <div className="nutriValue">
          <h5>Ernährungswerte</h5>
          <p>
            {recipe.totalNutrients.CA.label} :{" "}
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {recipe.totalNutrients.CHOLE.label} :{" "}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {recipe.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </p>

          <p>Calories: {Math.round(recipe.calories)}</p>
        </div>
        <div className="detailsImg">
          <img src={recipe.image} alt="" />
        </div>
        <div className="zutatContainer">
          <h4>Wie kann man zubereiten?</h4>
          {recipe.ingredientLines.map((item, i) => (
            <p key={i}>
              {i + 1} - {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
