import axios from 'axios';

const ROOT_URL = `http://www.omdbapi.com/`;

export const FETCH_MOVIES = 'FETCH_MOVIES';

export function fetchShows(title){
  const url = `${ROOT_URL}?t=${title}&r=json`;
  const request = axios.get(url)
    // .then(function(response){
    //   console.log('Response: ', response);
    // })
    // .catch(function(error){
    //   console.log(error);
    // })

  console.log('Request: ', request);
  return {
    type: FETCH_MOVIES,
    payload: request
  }
}
