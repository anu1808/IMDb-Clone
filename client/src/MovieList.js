import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Modal from './Modal';
import Pagination from './Pagination';
import './MovieList.css'; // Import the CSS file

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState('');
  const [sortBy, setSortBy] = useState('year');
  const [rating, setRating] =useState('');
  const [title, setTitle] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal=()=>{
    setOpenModal(!openModal);
  }

  useEffect(() => {
    fetchMovies();
  }, [page, genre, sortBy, title]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/movies', {
        params: { genre, sortBy, page, title }
      });
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/movies/${id}`);
      setSelectedMovie(response.data);
      setOpenModal(true);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return (
    <div className="movie-list-container">
      <div className='nav'>
      <img className="title" src='data:image/png;base64,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'/>
      <Search className="search" setTitle={setTitle} setSortBy={setSortBy} />
      </div>
      
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie._id} onClick={() => fetchMovieDetails(movie._id)} className="movie-row">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
              <span className="movie-title">{movie.title} ({movie.year})</span>
              <span className="movie-genres">{movie.genres.join(' / ')}</span>
            </div>
            <div className="movie-rating">
              <span className="star">&#9733;</span> {movie.imdb.rating}
            </div>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />

      <Modal isVisible={openModal} onClose={() => setOpenModal(false)} movie={selectedMovie} />
    </div>
  );
};

export default MovieList;
