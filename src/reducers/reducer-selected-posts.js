import _ from 'lodash'

import { SELECT_POST, DESELECT_POST } from '../actions/index'

const INITIAL_STATE = [];

const SelectedPostsReducers = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SELECT_POST:
      return [...state, action.payload];
    case DESELECT_POST:
      return _.without(state, action.payload);
    default:
      return state;
  }
}

export default SelectedPostsReducers;