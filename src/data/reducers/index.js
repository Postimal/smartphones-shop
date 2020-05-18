import { combineReducers } from 'redux';

import smartphonesReducer from './smartphones.reducer';
import filterReducer from './filter.reducer';


const rootReducer = combineReducers({
  smartphonesReducer,
  filterReducer,
});


export default rootReducer;
