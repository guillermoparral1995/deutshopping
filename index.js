const app = require('express')();
const cors = require('cors');
const { translationMiddleware, imageMiddleware, errorHandler } = require('./middlewares');

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use('/api/translate', translationMiddleware);
app.use('/api/image', imageMiddleware);
app.use(errorHandler);

app.listen(8080, () => {
  console.log('Server started in port 8080')
});