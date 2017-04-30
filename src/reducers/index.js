import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import brewSession from './brewSessionReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  brewSession,
  routing: routerReducer
});

export default rootReducer;
