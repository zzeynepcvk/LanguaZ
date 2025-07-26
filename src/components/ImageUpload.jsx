import React from 'react';

const ImageUpload = ({ onImageChange, image }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onImageChange(url);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {image && (
  <img
    id="uploaded-image" // 👈 Bu önemli!
    src={image}
    alt="preview"
    width="224"
    height="224"
  />
)}
    </div>
  );
};

export default ImageUpload;