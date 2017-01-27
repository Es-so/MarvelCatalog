import requestJson from '../fetchAndPromises';

const R = require('ramda');

export const HEROS_LOADED = 'heros/herosLoaded';
export const HERO_LOADED = 'heros/heroLoaded';

export const herosLoaded = heros => ({
  type: HEROS_LOADED,
  payload: heros,
});

export const loadHeros = () => (dispatch) => {
  requestJson('')
    .then(data => dispatch(herosLoaded(data.data.results)))
    .catch(console.log);  // eslint-disable-line no-console
};

export const heroLoaded = (hero, name, thumbnail) => ({
  type: HERO_LOADED,
  name,
  payload: hero,
  thumbnail,
});

export const formatId = R.concat('/');

export const loadHero = hero => (dispatch) => {
  requestJson(formatId(hero.id))
    .then(data => dispatch(heroLoaded(data.data.results, hero.name, hero.thumbnail)));
};
