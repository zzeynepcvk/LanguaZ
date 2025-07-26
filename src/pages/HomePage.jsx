import React from 'react';
import ImageUpload from '../components/ImageUpload';
import LanguageSelector from '../components/LanguageSelector';

const HomePage = ({ onImageChange, onPredict, onLanguageChange, image }) => {
  return (
    <div className='container'>
      <h1>LanguaZ</h1>
      <h2>Upload an image now to discover its name!</h2>
      <ImageUpload onImageChange={onImageChange} image={image} />
      <LanguageSelector onLanguageChange={onLanguageChange} />
      <button onClick={onPredict}>Predict</button>

    </div>
  );
};

export default HomePage;
