import React from 'react';
import "./MovieCard.css"

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className='card'>
        <div>
          <img src={movie.posterURL} alt={movie.title} />
        </div>
        <div className='card-text'>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard; 
