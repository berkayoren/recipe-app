import React from "react";
import "./Card.css";
import defaultImage from "../../assets/default-image.jpg";
import { useNavigate } from "react-router-dom";

const Card = ({ recipe }) => {
  let navigate = useNavigate();
  const viewMore = () => {
    navigate("./details", { state: { recipe } });
  };
  return (
    <div className="cardContainer">
      <h4>{recipe.label}</h4>

      <img src={recipe?.image || defaultImage} alt="" className="recipeImage" />
      <button onClick={viewMore}>View More</button>
    </div>
  );
};

export default Card;
