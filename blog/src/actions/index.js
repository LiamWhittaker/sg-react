import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async function(dispatch) {
    const res = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: res.data });
  }
}