import React, { useState } from 'react';
import { IonButton, IonInput } from '@ionic/react'
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
    <IonInput type="text" onKeyUp={(e) => handleInput(e)} placeholder='Qué querés buscar?'/>
    <IonButton type="submit" onClick={() => handleSubmit()}>Buscá!</IonButton>
  </div>
}

export default Form