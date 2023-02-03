import React from 'react'

const MovieList = (props) => {
  return (
    <div>
        {
            props.movie.map((movie) =>(
              <div className="image-container">
                <img src={movie.poster} alt="movie" />
              </div>
            ))
        }
    </div>
  )
}

export default MovieList