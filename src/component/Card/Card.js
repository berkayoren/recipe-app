import React from "react";
import "./Card.css";
import defaultImage from "../../assets/default-image.jpg";

const Card = () => {
  return (
    <div className="cardContainer">
      <h4>{recipe.label}</h4>

      <img src={defaultImage} alt="" className="recipeImage" />
      <button>View More</button>
    </div>
  );
};

export default Card;
