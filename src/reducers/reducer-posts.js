import { FETCH_POSTS } from '../actions/index'
import { FETCH_POST } from '../actions/index'

const INITIAL_STATE = {all: [], post: null};

const PostsReducers = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_POST:
      return {...state, post: action.payload.data}
    case FETCH_POSTS:
      return {...state, all: action.payload.data};
    default:
      return state;
  }
}

export default PostsReducers;