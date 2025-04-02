import {API_KEY} from './Constants/constants'

const actionUrl = `/discover/movie?api_key=${API_KEY}&with_genres=28`
const originalsUrl = `/discover/tv?api_key=${API_KEY}&with_networks=213`
const comedyUrl = `/discover/movie?api_key=${API_KEY}&with_genres=35`
const romanceUrl = `/discover/movie?api_key=${API_KEY}&with_genres=10749`

export {actionUrl, originalsUrl, comedyUrl, romanceUrl}
