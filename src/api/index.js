import { baseUrls } from '../config';
const environment = process.env.NODE_ENV;

export const translate = async (query) => {
  const translateURL = `${baseUrls.translate[environment]}?text=${query}`;
  const response = await fetch(translateURL);
  const data = await response.json();
  console.log(data);
}

export const getImage = async (query) => {
  const imageURL = `${baseUrls.image[environment]}?q=${query}`;
  const response = await fetch(imageURL);
  const data = await response.json();
  console.log(data);
}