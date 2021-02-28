import React from 'react';
import Header from './Header.js';
import axios from 'axios';

const NewBeer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let tagline = e.target.tagline.value;
    let description = e.target.description.value;
    let firstBrewed = e.target.firstBrewed.value;
    let brewersTips = e.target.brewersTips.value;
    let attenuationLevel = e.target.attenuationLevel.value;
    let contributedBy = e.target.contributedBy.value;

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        firstBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log('Posting failed', err));
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" />
        <input name="tagline" type="text" placeholder="Tagline" />
        <textarea name="description" type="text" placeholder="Description" />
        <input name="firstBrewed" type="text" placeholder="First Brewed" />
        <input name="brewersTips" type="text" placeholder="Brewers Tips" />
        <input
          name="attenuationLevel"
          type="number"
          placeholder="Attenuation level"
        />
        <input name="contributedBy" type="text" placeholder="Contributed by" />
        <button type="submit">Add new</button>
      </form>
    </div>
  );
};

export default NewBeer;
