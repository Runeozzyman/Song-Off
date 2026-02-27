import React from 'react';
  
  const Spotify_Player = ({trackID}) =>  {

    if(!trackID) return null;

	return (
	  <iframe
      src={`https://open.spotify.com/embed/track/${trackID}`}
      width="100%"
      height="352"
      allowFullScreen=""
      style={{ border: "none", borderRadius: "12px" }}
      allow="encrypted-media"
      loading="lazy"
      title="Spotify Player"
      />
	);
  }
  
  export default Spotify_Player;
  