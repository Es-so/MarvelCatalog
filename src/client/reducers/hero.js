import {
  HERO_LOADED,
} from '../actions';

const fillHero = (state, action) => {
  const { payload, name } = action;
  return { name, ...payload};
};

const hero = (state = [], action) => {
  switch (action.type) {
  	case HERO_LOADED:
  		return fillHero(state, action);
    default:
      return state;
  }
};

export default hero;
