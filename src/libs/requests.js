import axios from '../libs/axios'
const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  fetchAdventureMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`,
  fetchWarMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10752`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
  fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
  addWishList: `/account/${process.env.REACT_APP_API_ID}/watchlist`,
};

export const addWishList = async () => {
  try {
    const { data } = await axios.post(requests.addWishList, {media_type: 'movie', media_id: 12, watchlist: true})
    console.log(data)
  } catch (error) {
    alert(JSON.stringify(error))
  }
}

export default requests