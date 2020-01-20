const app = require('express')();
const { translationService, imageService, errorHandler } = require('./middlewares');

app.use('/api/translate', translationService);
app.use('/api/image', imageService);
app.use(errorHandler);

app.listen(8080, () => {
  console.log('Server started in port 8080')
});