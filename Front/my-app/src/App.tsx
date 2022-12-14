import React from 'react';
import './App.css';
import axios from 'axios';


const App=() => {
  const SERVER = 'http://127.0.0.1:8000/products'

    axios.get(SERVER).then((res) =>console.log(res.data))
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
