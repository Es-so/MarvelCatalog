import requestJson from '../fetchAndPromises';
import R from 'ramda';

export const HEROS_LOADED = 'heros/herosLoaded';
export const HERO_LOADED = 'heros/heroLoaded';

const formatData = data => data.data.results;
const formatId = R.concat('/');
const mixin = (dispatch, func_) => R.compose(dispatch, func_, formatData);

export const herosLoaded = heros => ({
  type: HEROS_LOADED,
  payload: heros,
});

export const loadHeros = () => (dispatch) => {
  requestJson('')
    .then(mixin(dispatch, herosLoaded)).catch(console.log);  // eslint-disable-line no-console
};

export const heroLoaded = (hero) => ({
  type: HERO_LOADED,
  name: hero[0].name,
  payload: hero,
  thumbnail: hero[0].thumbnail,
});

export const loadHero = id => (dispatch) => {
  requestJson(formatId(id)).then(mixin(dispatch, heroLoaded)).catch(console.log);  // eslint-disable-line no-console;
};
