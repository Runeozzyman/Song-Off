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
        <a href="https://open.spotify.com/playlist/1nzGNqnfiCONm67MogkZxg?si=a66af0f256a94622" target='_blank'>
          <FaSpotify size={25}/>
        </a>
        </div>

        <div className='footer-right'>
        <a href="https://github.com/Runeozzyman/Song-Off" aria-label='GitHub' target='_blank' id='github'>
            <FaGithub size={25}/>
        </a>
        
        <a href="https://www.linkedin.com/in/austinwort/" aria-label='LinkedIn' target='_blank' id='linkedin'>
            <FaLinkedin size={25}/>
        </a>
        </div>

        
        
	  </div>
	);
  }
  
  export default Footer;
  