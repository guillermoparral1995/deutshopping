const app = require('express')();
const cors = require('cors');
const { translationService, imageService, errorHandler } = require('./middlewares');

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use('/api/translate', translationService);
app.use('/api/image', imageService);
app.use(errorHandler);

app.listen(8080, () => {
  console.log('Server started in port 8080')
});