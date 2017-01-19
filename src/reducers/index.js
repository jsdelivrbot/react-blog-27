import { combineReducers } from 'redux';
import PostsReducers from './reducer-posts'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducers,
  form: formReducer
});

export default rootReducer;
