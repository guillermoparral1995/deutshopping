const fetch = require('node-fetch');

const URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const API_KEY = 'trnsl.1.1.20200120T003354Z.868edaa2ed3f3627.4f6cad056710584994aaa49142a48feec8fa5bec';
const lang = 'de-es';

const translationService = async (req, res, next) => {
  console.log('Calling translations service');
  const text = req.query.text;
  const fullURL = `${URL}?key=${API_KEY}&text=${text}&lang=${lang}`;
  try {
    const response = await fetch(fullURL);
    const data = await response.json();
    console.log(data);
    res.status(200).send(data);
  } catch(err) {
    next(err);
  }
}

module.exports = translationService;