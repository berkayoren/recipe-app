import React from "react";
import "./Home.css";
import Search from "../../component/Search/Search";
import Card from "../../component/Card/Card";
const Home = () => {
  return (
    <div>
      <Search />
      <div className="resultContainer">
        <Card />
      </div>
    </div>
  );
};

export default Home;
