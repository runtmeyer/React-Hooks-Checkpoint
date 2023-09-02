// src/components/MovieForm.js
import React, { useState } from 'react';
import "./MovieForm.css"

function MovieForm({ handleAddMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    });
  };

  return (
    <div className="movie-form">
      <hr></hr>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
        <div className='title'>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        </div>
        <div className='desc'>
        <input
          type="text"
          name="description"
          value={newMovie.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        </div>
        <div className='posterUrl'>
        <input
          type="text"
          name="posterURL"
          value={newMovie.posterURL}
          onChange={handleChange}
          placeholder="Poster URL"
          required
        />
        </div>
        <div className='rating'>
        <input
          type="number"
          name="rating"
          value={newMovie.rating}
          onChange={handleChange}
          placeholder="Rating"
          min="1"
          max="10"
          required
        />
        </div>
        </div>
        <div className='btn'>
        <button type="submit">Add Movie</button>
        </div>
      </form>
    </div>
  );
}

export default MovieForm;
