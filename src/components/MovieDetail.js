// MovieDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        title={`${movie.title} Trailer`}
        width="560"
        height="315"
        src={movie.trailerLink}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetail;
