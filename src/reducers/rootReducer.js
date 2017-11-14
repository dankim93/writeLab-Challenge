import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  classes: dataReducer
});

export default rootReducer;
