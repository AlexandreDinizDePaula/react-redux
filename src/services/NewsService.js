import axios from "axios";

/*export class MoviesService {
  static API_KEY = "d416af5d4faee64e25ab001d87aab5c3";

  static _withBaseUrl(path) {
    return `https://api.themoviedb.org/3/${path}?api_key=${
      MoviesService.API_KEY
    }`;
  }

  static getPopularMovies() {
    return axios(MoviesService._withBaseUrl("movie/popular"));
  }

  static getMoviesById(movie_id){
    return axios(MoviesService._withBaseUrl("movie/" + movie_id))
  }
} */

export class NewsService {

  static API_KEY = "d416af5d4faee64e25ab001d87aab5c3";

  static _baseUrl(path) {
    return `http://newsapi.org/v2/${path}&apiKey=${NewsService.API_KEY}`;
  }

  static getBrasilHeadlines() {
    return axios(NewsService._baseUrl("top-headlines?country=br&pageSize=15"))
  }

  static getSportNews() {
    return axios(NewsService._baseUrl("top-headlines?country=br&category=sports&pageSize=15"))
  }

  static getTechnologyNews() {
    return axios(NewsService._baseUrl("top-headlines?country=br&category=technology&pageSize=15"))
  }

  static getEntertainment() {
    return axios(NewsService._baseUrl("top-headlines?country=br&category=entertainment&pageSize=15"))
  }

}


