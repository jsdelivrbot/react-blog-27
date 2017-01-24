import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import PostsIndex from './components/posts-index'
import SelectedPostsList from './components/posts-selected-list'
import PostsNew from './components/posts-new'
import PostsShow from './components/posts-show'

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew}/>
    <Route path="posts/selected" component={SelectedPostsList}/>
    <Route path="posts/:id" component={PostsShow}/>
  </Route>
);

