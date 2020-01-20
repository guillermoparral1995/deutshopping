import React, { useState } from 'react';
import './App.scss';
import Form from './Form/Form';

const App = () => {
  const [showHeader, setShowHeader] = useState(true);

  const handleShowHeader = (event) => {
    console.log(event.target.value);
    event.target.value ? setShowHeader(false) : setShowHeader(true);  
  };
  
  return (
    <div className="App">
      <header className={`App-header ${showHeader ? '' : '-hide'}`}>
        <h1>Deutshopping</h1>
        <h5>Una mano para las compras en Berlín</h5>
      </header>
      <main>
        <Form handleShowHeader={(e) => handleShowHeader(e)}></Form>
        {/* <Results></Results> */}
      </main>
    </div>
  );
}

export default App;
