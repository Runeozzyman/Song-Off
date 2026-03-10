import React from 'react';
import './component-css/Footer.css';
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';

  const Footer = () =>  {
	return (
	  <div className ="footer">
        
        <div className='footer-left'>
        <a href="https://www.vecteezy.com/free-png/amplifier">Amplifier PNGs by Vecteezy</a>
        </div>

        <div className="footer-center">
        <a href="https://open.spotify.com/playlist/1nzGNqnfiCONm67MogkZxg?si=a66af0f256a94622">
          <FaSpotify size={25}/>
        </a>
        </div>

        <div className='footer-right'>
        <a href="https://github.com/Runeozzyman" aria-label='GitHub'>
            <FaGithub size={25}/>
        </a>
        
        <a href="https://www.linkedin.com/in/austinwort/" aria-label='LinkedIn'>
            <FaLinkedin size={25}/>
        </a>
        </div>

        
        
	  </div>
	);
  }
  
  export default Footer;
  