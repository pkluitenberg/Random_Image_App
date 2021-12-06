import React, {useEffect, useState} from 'react';
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
                <img src={currentImage} className="App-image" alt={"It's random. I don't know what this is gonna be"}/>
            </header>
        </div>
    );
}

export default App;
