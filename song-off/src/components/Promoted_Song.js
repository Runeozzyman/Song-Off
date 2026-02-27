import React from 'react';
import './component-css/Promoted_Song.css'
  
  const Promoted_Song = () =>  {
	return (
	  <div className='promoted-box'>
        <div className='promoted-header'>
            <h1>Promoted Song</h1>
        </div>

        <div className='promoted-content'>
          promoted playlist of top 50 or so songs
        </div>
        
	  </div>
	);
  }
  
  export default Promoted_Song;
  