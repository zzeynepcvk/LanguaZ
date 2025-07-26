// components/PredictionResult.jsx veya .js

import React, { useEffect, useState } from 'react';
import { translateText } from '../utils/translation';  // dosya yolunu kendi yapına göre ayarla

const langMap = {
  en: 'en-US',
  tr: 'tr-TR',
  fr: 'fr-FR',
  de: 'de-DE',
  es: 'es-ES',
  // ihtiyacına göre ekle
};

const PredictionResult = ({ result, language }) => {
  const [translatedWord, setTranslatedWord] = useState('');

  useEffect(() => {
    if (!result) return;

    async function fetchTranslation() {
      try {
        const translated = await translateText(result.label, language);
        setTranslatedWord(translated);

        const utterance = new SpeechSynthesisUtterance(translated);
        utterance.lang = langMap[language] || 'en-US';
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        console.error('Çeviri hatası:', error);
        setTranslatedWord(result.label);
      }
    }

    fetchTranslation();
  }, [result, language]);

  if (!result) return null;

  return <div className="prediction-result">{translatedWord || result.label}</div>;
};

export default PredictionResult;
