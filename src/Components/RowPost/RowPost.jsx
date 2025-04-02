import React, {useEffect, useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../Constants/constants'

function RowPost({url, title, isSmall}) {
  const [movie, setMovie] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(url).then((response) => {
      setMovie(response.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleMovieTrailer = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length > 0) {
          setUrlId(response.data.results[0])
          console.log(response.data.results[0])
          console.log(urlId)
        } else {
          console.log('Empty Array')
        }
      })
  }
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="posters">
          {movie.map((obj, index) => (
            <img
              onClick={() => handleMovieTrailer(obj.id)}
              key={index}
              className={isSmall ? 'small-poster' : 'poster'}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="poster"
            />
          ))}
        </div>
      </div>
      {urlId && (
        <div className="video-overlay" onClick={() => setUrlId('')}>
          <div className="video">
            <YouTube videoId={urlId.key} opts={opts} />
          </div>
        </div>
      )}
    </>
  )
}

export default RowPost
