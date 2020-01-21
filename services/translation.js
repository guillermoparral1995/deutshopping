const fetch = require('node-fetch');

const URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
const API_KEY = 'trnsl.1.1.20200120T003354Z.868edaa2ed3f3627.4f6cad056710584994aaa49142a48feec8fa5bec';
const lang = 'de-es';

const translate = async (text) => {
  const fullURL = `${URL}?key=${API_KEY}&text=${text}&lang=${lang}`;
  console.log(`Calling translation service: ${fullURL}`);
  const response = await fetch(fullURL);
  const data = response.json();
  return data;
}

const translateQuery = async(text) => {
  const fullURL = `${URL}?key=${API_KEY}&text=${text}&lang=de-en`;
  console.log(`Calling translation service: ${fullURL}`);
  const response = await fetch(fullURL);
  const data = await response.json();
  return data;
}

module.exports = {
  translate,
  translateQuery
}