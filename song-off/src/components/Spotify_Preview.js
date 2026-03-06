import React from 'react';
import { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import './component-css/Spotify_Preview.css';

const Spotify_Preview = ({trackID, image}) =>  {
  const [loaded, setLoaded] = useState(false);
  const [meta, setMeta] = useState(null);

  const loader = (
    <Audio 
        height="40"
        width="40"
        radius="9"
        color="#fff702cc"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="custom-loader"
        visible={true}
    />
  );


 useEffect(() => {

    setMeta(null);
    setLoaded(false);

  async function fetchMeta() {
    try {
      const res = await fetch(`http://localhost:4000/api/spotify/oembed/${trackID}`);
      const data = await res.json();
      setMeta(data);
    } catch (err) {
      console.error("Failed to fetch Spotify metadata", err);
    }
  }

  fetchMeta();
}, [trackID]);

  if (loaded) {
    return (
      <iframe
        src={`https://open.spotify.com/embed/track/${trackID}`}
        width="100%"
        height="80"
        style={{ border: "none", borderRadius: "12px" }}
        allow="encrypted-media"
        loading="lazy"
        title="Spotify Player"
      />
    );
  }

  return (
  <div className="spotify-preview" onClick={() => setLoaded(true)}>
    {meta ? (
      <>
        <img src={meta.thumbnail} alt="Album cover" />
        <div className="spotify-preview-info">{meta.title}</div>
      </>
    ) : (
      <div className="spotify-loading">{loader}</div>
    )}
  </div>
);
}
  
export default Spotify_Preview;
  