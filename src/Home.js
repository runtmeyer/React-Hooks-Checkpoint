import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieForm from './components/MovieForm';

function Home(){
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState({ title: '', rating: '' });


useEffect(() => {
    // Simulate fetching movies from an API or local storage
    // In a real app, you would replace this with actual data fetching
    const initialMovies = [
      {
        title: 'Barbie',
        description: 'The film stars Margot Robbie as Barbie and Ryan Gosling as Ken, and follows the pair on a journey of self-discovery following an existential crisis.',
        posterURL: 'https://people.com/thmb/FFiHJOzjp0cn9cloy1Ba8456Q_Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(659x285:661x287):format(webp)/barbie-movie-still-071123-2cf8cca8eb1e4f839232db47c6dc839a.jpg',
        rating: 9.5,
        trailerLink: 'https://www.youtube.com/embed/VIDEO_ID_HERE',
      },
      {
        title: 'Oppenheimer',
        description: 'The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.',
        posterURL: 'https://balboapark.org/wp-content/uploads/2023/06/Oppenheimer-Christopher-Nolan-0.jpeg',
        rating: 8.6,
        trailerLink: 'https://www.youtube.com/embed/VIDEO_ID_HERE',
      },
      // Add more initial movies as needed
    ];

    setMovies(initialMovies);
  }, []);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.rating === '' || movie.rating >= parseFloat(filter.rating))
    );
  });

  return (
    <div className="Home">
        <h1>Movie List</h1>
        <Filter handleFilterChange={handleFilterChange} />
        <MovieList movies={filteredMovies} />
        <MovieForm handleAddMovie={handleAddMovie} />
    </div>
  );
}

export default Home;