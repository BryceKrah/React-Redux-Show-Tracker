import axios from 'axios';

const ROOT_URL = `http://www.omdbapi.com/`;

export const FETCH_MOVIES = 'FETCH_MOVIES';


export function fetchShows(title){
  const url = `${ROOT_URL}?t=${title}&r=json`;
  const request = axios.get(url)

  console.log('Request: ', request);
  return {
    type: FETCH_MOVIES,
    payload: request
  }
}

export const FETCH_ALL_MOVIES = 'FETCH_ALL_MOVIES'

export function fetchAllMovies(title){
  const url = `${ROOT_URL}?s=${title}&r=json`;
  const request = axios.get(url)

  return {
    type: FETCH_ALL_MOVIES,
    payload: request
  }

}
