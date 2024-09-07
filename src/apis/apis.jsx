const api = "https://phimapi.com"
import axios from "axios"
export const getFilmNomiNations = () => axios.get(`${api}/danh-sach/phim-moi-cap-nhat`)
export const getListYear = payload => axios.get(`${api}${payload}`)
export const getCartoonFilm = () => axios.get(`${api}/v1/api/danh-sach/hoat-hinh`)
export const getSeriesFilm = () => axios.get(`${api}/v1/api/danh-sach/phim-bo`)
export const getTVShowFims = () => axios.get(`${api}/v1/api/danh-sach/tv-shows`)
export const getSingleFilms = () => axios.get(`${api}/v1/api/danh-sach/phim-le`)
export const getListFilms = payload => axios.get(`${api}/v1/api${payload}`)
export const getFilms = payload => axios.get(`${api}${payload}`)
export const SearchFilms = (keyword, limit, page) =>
  axios.get(`${api}/v1/api/tim-kiem?keyword=${keyword}&limit=${limit}?page=${page}`)
export const getRelatedFilm = payload =>
  axios.get(`${api}/danh-sach/phim-moi-cap-nhat?page=${payload}`)
