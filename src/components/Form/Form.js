import React, { useState } from 'react';
import './Form.scss';
import { translate } from '../../api';

const Form = ({ handleShowHeader }) => {
  const [inputText, setInputText] = useState('');

  const handleInput = (event) => {
    setInputText(event.target.value);
    handleShowHeader(event);
  }

  const handleSubmit = () => {
    translate(inputText);
  }
  
  return <div className="form-container">
    <input type="text" onKeyUp={(e) => handleInput(e)} placeholder='Qué querés buscar?'/>
    <button type="submit" onClick={() => handleSubmit()}>Buscá!</button>
  </div>
}

export default Form