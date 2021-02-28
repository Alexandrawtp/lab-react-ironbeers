import React from 'react';
import { Link } from 'react-router-dom';
import allBeer from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

const Home = () => (
  <div>
    <img src={allBeer} alt="pub"/>
    <h1>
      <Link to="/beers">All Beers</Link>
    </h1>
    <img src={randomBeer} alt="pub-detail"/>
    <h1>
      <Link to="/random-beers">Random Beer</Link>
    </h1>
    <img src={newBeer} alt="new-beer"/>
    <h1>
      <Link to="/new-beer">New Beer</Link>
    </h1>
  </div>
);

export default Home;
