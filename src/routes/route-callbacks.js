import store from '../store'
import { fetchPosts } from '../actions'

export const onPostsIndexEnter = () => {
  store.dispatch(fetchPhotos());
}