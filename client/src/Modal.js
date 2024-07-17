import React from 'react';

const Modal = ({ isVisible, onClose, movie }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className='maindiv'>
            <div className='div3'>
                <h2>{movie.title} ({movie.year})</h2>
                <p><strong>Plot:</strong> {movie.fullplot}</p>
                <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
                <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
                <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
                <p><strong>Languages:</strong> {movie.languages.join(', ')}</p>
                <p><strong>Directors:</strong> {movie.directors.join(', ')}</p>
                <p><strong>Rated:</strong> {movie.rated}</p>
                <p><strong>Awards:</strong> {movie.awards.text}</p>
                <p><strong>IMDB Rating:</strong> {movie.imdb.rating}</p>
            </div>
            <img className='img' src={movie.poster} alt={movie.title} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
