import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'
export const SELECT_POST = 'SELECT_POST'
export const DESELECT_POST = 'DESELECT_POST'
export const FETCH_PHOTOS = 'FETCH_PHOTOS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=asdfasdfasdf';
const PHOTOS_URL = 'http://'

export const deletePost = (id) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}/${API_KEY}`)
  return {
    type: DELETE_POST,
    payload: request
  }
}
export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}/${API_KEY}`)
  return {
    type: FETCH_POST,
    payload: request
  }
}
export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export const createPost = ({values}) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

  return {
    type: CREATE_POST,
    payload: request
  }
}

export const selectPost = (id) => {
  return {
    type: SELECT_POST,
    payload: id
  }
}

export const deselectPost = (id) => {
  return {
    type: DESELECT_POST,
    payload: id
  }
}

export const fetchPhotos = () => {
  const request = axios.get('http://jsonplaceholder.typicode.com/photos?albumId=41');

  return {
    type: FETCH_PHOTOS,
    payload: request
  }
}
