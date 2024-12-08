import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [trailerLink, setTrailerLink] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title,
      description,
      fullDescription: fullDescription || description,
      posterURL,
      trailerLink,
      rating: Number(rating)
    };

    addMovie(newMovie);

 
    setTitle('');
    setDescription('');
    setFullDescription('');
    setPosterURL('');
    setTrailerLink('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Add New Movie</h2>
      <div className="space-y-4">
        <input 
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
        <input 
          type="text"
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
        <textarea 
          placeholder="Full Description (optional)"
          value={fullDescription}
          onChange={(e) => setFullDescription(e.target.value)}
          className="w-full border rounded px-2 py-1"
          rows="3"
        />
        <input 
          type="text"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
        <input 
          type="text"
          placeholder="Trailer Embed Link (optional)"
          value={trailerLink}
          onChange={(e) => setTrailerLink(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
        <input 
          type="number"
          placeholder="Rating (0-10)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full border rounded px-2 py-1"
          min="0"
          max="10"
          required
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Movie
        </button>
      </div>
    </form>
  );
};

export default AddMovie;
