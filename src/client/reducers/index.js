import { combineReducers } from 'redux';
import heros from './heros';
import hero from './hero';

const reducers = combineReducers({
  heros,
  hero,
});

export default reducers;
