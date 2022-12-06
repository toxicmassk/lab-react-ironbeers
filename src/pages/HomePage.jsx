import React from "react";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import beersImg from "../assets/beers.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>
        <Link to="/all-beers">All Beers</Link>
      </h2>
      <h2>
        <Link to="/new-beer">Create</Link>
      </h2>
      <h2>
        <Link to="/random-beer">Random one</Link>
      </h2>
    </div>
  );
};

export default HomePage;
