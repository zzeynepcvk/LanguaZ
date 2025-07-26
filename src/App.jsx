import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import PredictionResult from './components/PredictionResult';
import { predictWithMobileNet } from './utils/mobilenetUtils';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [language, setLanguage] = useState('en-US');
  const [model, setModel] = useState(null);

  const handlePredict = async () => {
    if (!image) return alert("Please upload an image!");
  
    const imgEl = document.getElementById("uploaded-image");
    const prediction = await predictWithMobileNet(imgEl);
    setResult({ label: prediction.className });
  };
  

  return (
    <div className="App">
      <HomePage
        onImageChange={setImage}
        onPredict={handlePredict}
        onLanguageChange={setLanguage}
        image={image}
      />
      {result && <PredictionResult result={result} language={language} />}
    </div>
  );
}

export default App;

