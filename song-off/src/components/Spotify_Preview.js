import React from 'react';
import { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import './component-css/Spotify_Preview.css';
import Spotify_Player_Small from './Spotify_Player_Small';

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
      console.log(data);
    } catch (err) {
      console.error("Failed to fetch Spotify metadata", err);
    }
  }

  fetchMeta();
}, [trackID]);

  if (loaded) {
    return  <Spotify_Player_Small trackID={trackID}/>
  }

  return (
  <div className="spotify-preview" onClick={() => setLoaded(true)}>
    {meta ? (
      <>
        <img src={meta.thumbnail} alt="Album cover" />
        <div className="spotify-preview-info">
          {meta.title}
        </div>

      </>
    ) : (
      <div className="spotify-loading">{loader}</div>
    )}
  </div>
);
}
  
export default Spotify_Preview;
  