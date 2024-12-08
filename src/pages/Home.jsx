import React from 'react';
import MovieList from '../components/MovieList';
import AddMovie from '../components/AddMovie';

const Home = ({ movies, addMovie, deleteMovie }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Movie App</h1>
      <AddMovie addMovie={addMovie} />
      <MovieList movies={movies} deleteMovie={deleteMovie} />
    </div>
  );
};

export default Home;
