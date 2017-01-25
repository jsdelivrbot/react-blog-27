import store from '../store'
import { fetchPhotos } from '../actions'

export const onPostsIndexEnter = () => {
  store.dispatch(fetchPhotos());
}