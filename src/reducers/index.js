import { combineReducers } from 'redux';
import details from './details';
import pokedex from './pokedex';

export default combineReducers({
  details,
  pokedex
});
