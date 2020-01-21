const errorHandler = (err, req, res, next) => {
  const code = err.code || err.status || 500;
  console.error(`ERROR :: Code ${code} :: ${err.message || 'Something wrong happened'} :: ${err.stack}`);
  res.status(code).send(err);
}

module.exports = errorHandler;