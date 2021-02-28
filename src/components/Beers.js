import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Beers = () => {
  const [beers, updatedBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => updatedBeers(response.data))
      .catch((err) => console.log('Fetching failed', err));
  }, [updatedBeers]);

  const searchRequests = (e) => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`
      )
      .then((response) => updatedBeers(response.data))
      .catch((err) => console.log('Fetching failed', err));
  };

  return (
    <div>
      <Header />
      <div>
        <input
          onChange={searchRequests}
          type="text"
          placeholder="Search for a beer"
        />
      </div>
      {beers.map((beer, index) => (
        <Link to={`/beers/${beer._id}`} key={index}>
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </Link>
      ))}
    </div>
  );
};

export default Beers;
