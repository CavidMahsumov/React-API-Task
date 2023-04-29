import {post, get, postJSON} from './request'

export const getPosts = () => get('/posts')
export const getPostById = (id) => get(`/posts/${id}`)
export const addPost = data => post('/posts', data);
export const addPostJson = data => postJSON('/posts', data)