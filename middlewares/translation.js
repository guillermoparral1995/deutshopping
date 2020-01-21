const { translate } = require('../services/translation');

const translationMiddleware = async (req, res, next) => {
  const text = req.query.text;
  try {
    const response = await translate(text);
    res.status(200).send(response);
  } catch(err) {
    next(err);
  }
}

module.exports = translationMiddleware;