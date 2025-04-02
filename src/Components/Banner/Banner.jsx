import React, {useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../Constants/constants'
import YouTube from 'react-youtube'

function Banner() {
  const [movie, setMovie] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios
      .get(`/trending/movie/day?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * response.data.results.length
          )
          setMovie(response.data.results[randomIndex])
        }
      })
      .catch((err) => console.error())
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  const handlePlay = () => {
    console.log(movie.id)
    axios
      .get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results.length)

        if (response.data.results.length > 0) {
          setUrlId(response.data.results[0])
          console.log(response.data.results[0].key)
          console.log(urlId)
        } else {
          console.log('Empty Array')
        }
      })
  }
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title || movie.name : ''}</h1>
        <div className="banner_buttons">
          <button className="button" onClick={handlePlay}>
            Play
          </button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ''}</h1>
      </div>
      <div className="fade_bottom"></div>
      {urlId && (
        <div className="video-overlay" onClick={() => setUrlId('')}>
          <div className="video">
            <YouTube videoId={urlId.key} opts={opts} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Banner
