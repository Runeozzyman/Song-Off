import React from 'react';
  
  const Spotify_Player_Small = ({trackID}) =>  {

    if(!trackID) return null;

    return (
      <iframe
      src={`https://open.spotify.com/embed/track/${trackID}`}
      width="100%"
      height="80"
      allowFullScreen=""
      style={{ border: "none", borderRadius: "12px" }}
      allow="encrypted-media"
      loading="lazy"
      title="Spotify Player Small"
      />
    );
  }
  
  export default Spotify_Player_Small;
  
  