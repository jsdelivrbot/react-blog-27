import { combineReducers } from 'redux';
import PostsReducers from './reducer-posts'

const rootReducer = combineReducers({
  posts: PostsReducers
});

export default rootReducer;
