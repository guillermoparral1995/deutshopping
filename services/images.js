const fetch = require('node-fetch');

const URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = '43bdd49d46822e3eb8ccce755cf6c6f789521869724adbfc80a628c594d898dc';

const getImage = async (query) => {
  const fullURL = `${URL}?query=${query}`;
  console.log(`Calling image service ${fullURL}`);
  const response = await fetch(fullURL, {headers: {'Authorization': `Client-ID ${ACCESS_KEY}`}});
  const data = await response.json();
  return data;
};

module.exports = {
  getImage
}