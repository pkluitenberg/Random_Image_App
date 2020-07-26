import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [currentImage, getCurrentImage] = useState(0);

  useEffect(() => {
    fetch('/image').then(res => res.json()).then(data => {
      getCurrentImage(data.random_image_url);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={currentImage} className="App-image"/>
      </header>
    </div>
  );
}

export default App;
