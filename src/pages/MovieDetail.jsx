import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const movieId = Number(id);
  const movie = movies.find(m => m.id === movieId);

  if (!movie) {
    return <div className="container mx-auto p-4">Movie not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <button 
        onClick={() => navigate('/')}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Home
      </button>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mr-4">
          <img 
            src={movie.posterURL} 
            alt={movie.title} 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg mb-4">{movie.fullDescription}</p>
          
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Movie Details</h2>
            <p><strong>Rating:</strong> {movie.rating}/10</p>
          </div>

          {movie.trailerLink && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Movie Trailer</h2>
              <iframe 
                width="100%" 
                height="400" 
                src={movie.trailerLink}
                title={`${movie.title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
