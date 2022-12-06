import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleBeer = () => {
  const [singleBeer, setSingleBeer] = useState(null);
  const params = useParams();
  const apiEndpoint = `https://ih-beers-api2.herokuapp.com/beers/${params.id}`;

  useEffect(() => {
    const getBeersFromAPI = async () => {
      try {
        const res = await axios.get(apiEndpoint);
        console.log(res);
        setSingleBeer(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBeersFromAPI();
  }, [apiEndpoint]);

  return (
    <div>
      <Header></Header>
      <h1>Random One</h1>
      {singleBeer && (
        <div>
          <img src={singleBeer.image_url} width={100} alt="beerimage" />
          <h1>{singleBeer.name}</h1>
          <p>{singleBeer.tagline}</p>
          <p>{singleBeer.first_brewed}</p>
          <p>{singleBeer.attenuation_level}</p>
          <p>{singleBeer.description}</p>
          <p>{singleBeer.contributed_by}</p>{" "}
        </div>
      )}
    </div>
  );
};

export default SingleBeer;
