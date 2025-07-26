import React, { useEffect } from 'react';

const PredictionResult = ({ result, language }) => {
  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(result.label);
    utterance.lang = language;
    window.speechSynthesis.speak(utterance);
  }, [result, language]);

  return (
    <div>
      <h2>Prediction:</h2>
      <p className="prediction">{result.label}</p>

    </div>
  );
};

export default PredictionResult;