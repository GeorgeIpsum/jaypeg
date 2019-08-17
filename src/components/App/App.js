import React from 'react';
import './App.css';
import Editor from '../Editor';
import Jpeg from '../Jpeg';
import king from '../../assets/images/king.jpg';

function App() {
  return (
    <div className="App">
      <Editor />
      <Jpeg image={king} />
    </div>
  );
}

export default App;
