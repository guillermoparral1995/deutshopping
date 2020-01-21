import React, { useState } from 'react';
import './Form.scss';

const Form = ({ handleShowHeader, handleTranslate }) => {
  const [inputText, setInputText] = useState('');

  const handleInput = (event) => {
    setInputText(event.target.value);
    handleShowHeader(event);
  }

  const handleSubmit = () => {
    handleTranslate(inputText);
  }
  
  return <div className="form-container">
    <input type="text" onKeyUp={(e) => handleInput(e)} placeholder='Qué querés buscar?'/>
    <button type="submit" onClick={() => handleSubmit()}>Buscá!</button>
  </div>
}

export default Form