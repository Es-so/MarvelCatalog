import {
  HEROS_LOADED,
} from '../actions';

const fillHeros = (state, action) => {
  const { payload } = action;
  return [...state, ...payload];
};

const heros = (state = [], action) => {
  switch (action.type) {
    case HEROS_LOADED:
      return fillHeros(state, action);
    default:
      return state;
  }
};

export default heros;
