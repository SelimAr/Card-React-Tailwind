import React, { useEffect } from 'react';
import './App.css';
import Card from '../src/Components/Card.js';

function App() {

  useEffect(() => {
    document.title = "Tailwind Card"
  }, [])

  return (
    <div className="App">
        <Card/>
    </div>
  );
}

export default App;
