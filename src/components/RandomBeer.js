import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import axios from 'axios';

const RandomBeer = () => {
  const [beer, updatedBeer] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => updatedBeer(response.data))
      .catch((err) => console.log('Fetching failed', err));
  }, [updatedBeer]);

  return (
    <div>
      <Header />
      <img src={beer.image_url} alt="beer" />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
