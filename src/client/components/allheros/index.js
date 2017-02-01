import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0px;
  background-color: none;
  margin-top: 10px;
  width: auto;
  margin-left: auto;
  display: flex;
  margin-right: auto;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
`;

const HeroCard = styled.div`
  margin: 10px;
  width: 300px;
  height: 300px;
  backgroundColor: whitesmoke;
  borderRadius: 10px;
  boxShadow: none;
  border: solid 1px darkgrey;
  &:hover {
    boxShadow: 10px 10px 20px black;
    backgroundColor: ghostwhite;
    color: black;
    textShadow: 2px 2px 5px darkorange;
  }
`;

const Hero = ({ hero, actions }) =>
  <HeroCard>
    <div style={{ width: '100%', height: '80%', textAlign: 'center' }}>
      <img alt="hero" style={{ height: '100%', maxWidth: '80%' }} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
    </div>
    <div style={{ width: '100%', height: '5%', margin: '0.5em' }} >
      {hero.name}
    </div>
    <div style={{ height: '10%', marginLeft: '0.5em' }}>
      <button onClick={() => actions.loadHero(hero.id)} >Details</button>
    </div>
  </HeroCard>
;

Hero.propTypes = {
  hero: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const AllHeros = ({ heros, actions }) =>
  <Wrapper>
    {
      heros.map(hero =>
        <Hero key={hero.id} hero={hero} actions={actions} />
      )
    }
  </Wrapper>
;

AllHeros.propTypes = {
  heros: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired,
};

export default AllHeros;
