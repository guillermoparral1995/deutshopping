import React from 'react';

const Result = ({ showResults, translation, imgData }) => {
  return showResults && translation && imgData ? <div className='result-container'>
    <h2>{translation}</h2>
    <img src={imgData.imgSrc} alt={imgData.imgAlt}></img>
  </div> : null;
}

export default Result