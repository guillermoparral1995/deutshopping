const fetch = require('node-fetch');

const URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = '43bdd49d46822e3eb8ccce755cf6c6f789521869724adbfc80a628c594d898dc';

const imageService = async (req, res, next) => {
  console.log('Calling image service');
  const fullURL = `${URL}?query=${req.query.q}`;
  try {
    const response = await fetch(fullURL, {headers: {'Authorization': `Client-ID ${ACCESS_KEY}`}});
    const { results } = await response.json();
    res.status(200).send(results);
  } catch(err) {
    next(err);
  }
}

module.exports = imageService;