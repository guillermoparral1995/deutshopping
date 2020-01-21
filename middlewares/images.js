const { translateQuery } = require('../services/translation'); 
const { getImage } = require('../services/images');

const imageMiddleware = async (req, res, next) => {
  try {
    const translatedQuery = await translateQuery(req.query.q);
    const { results } = await getImage(translatedQuery.text[0]); 
    res.status(200).send(results);
  } catch(err) {
    next(err);
  }
}

module.exports = imageMiddleware;