import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, onDelete }) => {
  const navigate = useNavigate();

  const handleMovieClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="border rounded-lg p-4 m-2 w-64 shadow-lg">
      <div onClick={handleMovieClick} className="cursor-pointer">
        <img 
          src={movie.posterURL} 
          alt={movie.title} 
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className="text-sm mb-2">{movie.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold">Rating: {movie.rating}/10</span>
        </div>
      </div>
      <button 
        onClick={() => onDelete(movie.id)}
        className="mt-2 w-full bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default MovieCard;