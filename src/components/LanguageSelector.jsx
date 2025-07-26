import React from 'react';

const LanguageSelector = ({ onLanguageChange }) => {
  const handleChange = (e) => {
    onLanguageChange(e.target.value);
  };

  return (
    <select onChange={handleChange} defaultValue="en-US">
      <option value="en-US">English</option>
      <option value="tr-TR">Türkçe</option>
      <option value="fr-FR">Français</option>
      <option value="de-DE">Deutsch</option>
      <option value="es-ES">Espanyola</option>
    </select>
  );
};

export default LanguageSelector;
