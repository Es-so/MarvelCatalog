import React from 'react';
import styled from 'styled-components';

const HeroFich = styled.div`
  margin: 10px;
  width: 50em;
  overflow: auto;
  display: block;
  marginLeft: auto;
  marginRight: auto;
  display: flex;
`;

const HeadStyle = styled.div`
  marginTop: 0px;
  box-shadow: 0 0 0 1px hsl(0, 0%, 80%),
    0 0 0 3px hsl(0, 0%, 90%);
`;

const Header = ({ hero }) =>
  <HeadStyle>
    <h1 style={{ textAlign: 'center ' }} >{hero.name}</h1>
    <p>{hero.description}</p>
  </HeadStyle>
;

Header.propTypes = {
  hero: React.PropTypes.object.isRequired,
};


const PictureHero = ({ hero }) =>
  <div style={{ width: '20%', height: '100%' }}>
    <img alt="hero" style={{ height: '20%', width: '100%' }} src={`${hero[0].thumbnail.path}.${hero[0].thumbnail.extension}`} />
  </div>
;

PictureHero.propTypes = {
  hero: React.PropTypes.object.isRequired,
};

const Content = ({ hero, titleContent }) =>
  <div>
    <h3 style={{ backgroundColor: 'whitesmoke' }} > {titleContent} </h3>
    <ul>
      {
        hero.items.map((serie, index) =>
          <li
            style={{
              listStyle: 'none',
              borderBottom: '1px solid darkgrey',
              marginBottom: '4px' }}
            key={index}
          >
            {serie.name}
          </li>)
      }
    </ul>
  </div>
;

Content.propTypes = {
  hero: React.PropTypes.object.isRequired,
  titleContent: React.PropTypes.string.isRequired,
};

const Hero = ({ hero }) =>
  <HeroFich>
    <PictureHero hero={hero} />
    <div style={{ width: '80%', padding: '10px', paddingTop: '0px' }}>
      <Header hero={hero[0]} />
      <Content hero={hero[0].comics} titleContent="Comics" />
      <Content hero={hero[0].series} titleContent="Series" />
    </div>
  </HeroFich>
;

Hero.propTypes = {
  hero: React.PropTypes.object.isRequired,
};

export default Hero;
