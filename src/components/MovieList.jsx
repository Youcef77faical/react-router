import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, deleteMovie }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  return (
    <div>
      <div className="flex justify-center mb-6 space-x-4">
        <input 
          type="text"
          placeholder="Filter by title"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
          className="border rounded px-2 py-1 w-64"
        />
        <input 
          type="number"
          placeholder="Minimum rating"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(Number(e.target.value))}
          className="border rounded px-2 py-1 w-64"
          min="0"
          max="10"
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredMovies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onDelete={deleteMovie} 
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
