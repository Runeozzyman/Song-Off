import React from 'react';
import './component-css/Promoted_Song.css'
import Spotify_Player from "./Spotify_Player";
import { useState, useEffect } from 'react';
  
const PROMOTED_TRACK_ID = "41sGGCCoHI2GLV9qadX80A";

const Promoted_Song = () => {
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetchPromotedSong();
  }, []);

  async function fetchPromotedSong() {
    try {
      const res = await fetch(
        `http://localhost:4000/api/spotify/track/${PROMOTED_TRACK_ID}`
      );

      if (!res.ok) throw new Error("Failed request");

      const data = await res.json();
      setSong(data);
    } catch (err) {
      console.error("Failed to load song", err);
    }
  }


  return (
    <div className="promoted-box">
      <div className="promoted-header">
        <h1>Promoted Song</h1>
      </div>
      
      <div className="promoted-content">
        {song && <Spotify_Player trackID={song.id}/>}
      </div>
    </div>
  );
};

export default Promoted_Song;
  