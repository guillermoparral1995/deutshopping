import React, { useState } from 'react';
import './App.scss';
import Form from './Form/Form';
import Result from './Result/Result';
import { translate, getImage } from '../api';

const App = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [resultData, setResultData] = useState({});

  const handleShowHeader = (event) => {
    console.log(event.target.value);
    event.target.value ? setShowHeader(false) : setShowHeader(true);  
  };

  const handleTranslate = async (text) => {
    const [responseTranslation, responseImgData] = await Promise.all([
      translate(text), 
      getImage(text)
    ]);
    const mappedInfo = {
      translation: responseTranslation.text[0],
      imgData: {
        imgSrc: responseImgData[0].urls.thumb,
        imgAlt: responseImgData[0].alt_description
      }
    }
    setResultData(mappedInfo);
  }
  
  return (
    <div className="App">
      <header className={`App-header ${showHeader ? '' : '-hide'}`}>
        <h1>Deutshopping</h1>
        <h5>Una mano para las compras en Berlín</h5>
      </header>
      <main>
        <Form handleShowHeader={(e) => handleShowHeader(e)} handleTranslate={(text) => handleTranslate(text)}></Form>
        <Result showResults={!showHeader} translation={resultData.translation} imgData={resultData.imgData}></Result>
      </main>
    </div>
  );
}

export default App;
