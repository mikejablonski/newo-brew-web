import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import brewSession from './brewSessionReducer';
import brewSessionStatus from './brewSessionStatusReducer';
import tempStatus from './tempStatusReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  brewSession,
  brewSessionStatus,
  tempStatus,
  routing: routerReducer
});

export default rootReducer;
