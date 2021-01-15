import axios from 'axios';

export default async function fetchMoviesByTitle(title, page = 1) {
  return axios.get(process.env.REACT_APP_OMDB_API, { params: {
    s: title,
    page
  }});
}