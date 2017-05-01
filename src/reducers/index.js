import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import brewSession from './brewSessionReducer';
import brewSessionStatus from './brewSessionStatusReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  brewSession,
  brewSessionStatus,
  routing: routerReducer
});

export default rootReducer;
