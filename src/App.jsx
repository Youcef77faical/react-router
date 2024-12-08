import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending sci-fi thriller about dream infiltration",
      posterURL: "https://example.com/inception-poster.jpg",
      rating: 9,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
      fullDescription: "Dom Cobb (Leonardo DiCaprio) is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable."
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description: "A story of hope and friendship in prison",
      posterURL: "https://example.com/shawshank-poster.jpg",
      rating: 9.3,
      trailerLink: "https://www.youtube.com/embed/6hB3S9bNnQo",
      fullDescription: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    }
  ]);

  const addMovie = (newMovie) => {
    const movieWithId = {
      ...newMovie,
      id: movies.length + 1,
      fullDescription: newMovie.fullDescription || newMovie.description
    };
    setMovies([...movies, movieWithId]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              movies={movies} 
              addMovie={addMovie} 
              deleteMovie={deleteMovie} 
            />
          } 
        />
        <Route 
          path="/movie/:id" 
          element={<MovieDetail movies={movies} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
