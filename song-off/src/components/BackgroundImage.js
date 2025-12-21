import React from 'react';
import backgroundImage from '../assets/background.png'; 
import './BackgroundImage.css';

  const BackgroundImage = () => {
  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};
  
  export default BackgroundImage;
  