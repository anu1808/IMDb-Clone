const express = require("express");
const router = express.Router();
const Movie = require('../models/model');

// Routes
router.get('/', async (req, res) => {
  const { genre, sortBy, page = 1, limit = 10, title } = req.query;
  let filter = {};
  
  if (genre) filter.genre = genre;
  if (title) filter.title = new RegExp(title, 'i'); // Case-insensitive regex search for title

  try {
    let sortOption = {};
    if (sortBy === 'year') {
      sortOption.year = 1;
    } else if (sortBy === 'imdb.rating') {
      sortOption['imdb.rating'] = -1; // Sort by rating in descending order
    }

    let movies = await Movie.find(filter)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).send('Movie not found');
    }
    res.json(movie);
  } catch (error) {
    console.error('Error fetching movie:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
