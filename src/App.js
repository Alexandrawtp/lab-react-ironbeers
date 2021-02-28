import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Beers from './components/Beers.js';
import RandomBeer from './components/RandomBeer.js';
import NewBeer from './components/NewBeer.js';
import BeerDetails from './components/BeerDetails.js';
import './App.css'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/beers/:beerId" component={BeerDetails} />
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beers" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  </Router>
);

export default App;
