import { combineReducers } from 'redux';
import PostsReducers from './reducer-posts'
import SelectedPostsReducers from './reducer-selected-posts'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostsReducers,
  selectedPostIds: SelectedPostsReducers,
  form: formReducer
});

export default rootReducer;
