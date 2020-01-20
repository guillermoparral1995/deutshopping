const errorHandler = (err, req, res, next) => {
  console.error(err.message || 'Something wrong happened');
  res.status(err.code || 500).send(err);
}

module.exports = errorHandler;