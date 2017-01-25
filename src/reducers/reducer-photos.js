import { FETCH_PHOTOS } from '../actions/index'

const INITIAL_STATE = [];

const PhotosReducers = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_PHOTOS:
      return action.payload.data;
    default:
      return state;
  }
}

export default PhotosReducers;