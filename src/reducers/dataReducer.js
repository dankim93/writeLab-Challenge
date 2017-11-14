import {
  RECEIVE_ALL,
  RECEIVE_2015,
  RECEIVE_2016
} from '../actions/data_actions';

export default function(state = {}, action) {
// console.log(action);
  switch(action.type) {
    case RECEIVE_ALL:
      return action.data;
    case RECEIVE_2015:
      return action.data;
    case RECEIVE_2016:
      return action.data;
    default:
      return state;
  }
}
