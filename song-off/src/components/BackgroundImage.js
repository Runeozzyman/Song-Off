import React from 'react';
import backgroundImage from '../assets/background.png'; 
import './component-css/BackgroundImage.css';

  const BackgroundImage = () => {
  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};
  
  export default BackgroundImage;
  