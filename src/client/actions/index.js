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


export const heroLoaded = (hero) => ({
  type: HERO_LOADED,
  name: hero[0].name,
  payload: hero,
  thumbnail: hero[0].thumbnail,
});

const formatData = data => data.data.results;
const formatId = R.concat('/');
const mixin = (dispatch) => R.compose(dispatch, heroLoaded, formatData);

export const loadHero = hero => (dispatch) => {
  requestJson(formatId(hero.id))
    .then(mixin(dispatch));
};