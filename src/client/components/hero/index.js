import React from 'react';
import styled from 'styled-components';
const R = require('ramda');


const HeroFich = styled.div`
  margin: 10px;
  width: 50em;
  height: 50em;
  backgroundColor: whitesmoke;
  overflow: auto;
  display: block;
  marginLeft: auto;
  marginRight: auto;
  display: flex;
  borderRadius: 10px;
  boxShadow: 10px 10px 20px;
  border: solid 1px darkgrey;
`;

const Header = ({ hero }) =>
  <div>
    <h1 style={{ textAlign: 'center '}} >{hero.name}</h1>
    <p>{hero[0].description}</p>
  </div>
;

const PictureHero = ({ hero }) =>
  <div style={{ width: '20%', height: '100%' }}>
    <img style={{ height: '20%', borderRadius: '10px 0px 0px 0px' }} src={`${hero[0].thumbnail.path}.${hero[0].thumbnail.extension}`} />
  </div>
;

const Content = ({ hero, titleContent }) => {
  return (
  	<div>
  	  <h3> {titleContent} </h3>
  	  <ul>
  	  { hero.items.map((serie, index) => <li key={index}> {serie.name} </li>)}
  	  </ul>
  	</div>
)};

const Hero = ({ hero }) => {
 console.log(hero[0]);
  return(
  <HeroFich>
    <PictureHero hero={hero} />
    <div style={{ width: '80%', padding: '10px' }}>
      <Header hero={hero} />
      <Content hero={hero[0].comics} titleContent='Comics' />
      <Content hero={hero[0].series} titleContent='Series' />
    </div>
  </HeroFich>
)};

export default Hero;