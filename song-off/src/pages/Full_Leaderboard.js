import React from 'react';
import { useState, useEffect, memo } from 'react';
import { getTopNSongs } from '../services/songService';
import { Audio } from 'react-loader-spinner';
import './page-css/Full_Leaderboard.css';
import LazyLoad from 'react-lazyload';
import Spotify_Preview from '../components/Spotify_Preview';
  
  const Full_Leaderboard = () =>  {

    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [testBool, setTestBool] = useState(true);

    useEffect(() => {
  async function getTop50Songs() {
    try {
      const res = await getTopNSongs(50);
      setSongs(res);
    } catch (err) {
      console.error("Failed to fetch full leaderboard", err);
      setError("Failed to load leaderboard");
    } finally {
      setLoading(false);
    }
  }

  getTop50Songs();
}, []);

	return (
  <div className="full-leaderboard">
    <div className="full-leaderboard-header">
      <h1>Top 50</h1>
    </div>
    <div className='divider'></div>

    <div className="leaderboard-list">
      <div className="full-leaderboard-items">
        {songs.map((song, index) => (
          <div key={song.submitted_track_id} className="full-leaderboard-row">
            <div className="full-leaderboard-rank">{index + 1}</div>

            
            <Spotify_Preview
              trackID={song.submitted_track_id}
              image={song.album_image}
            />

            <div className="full-leaderboard-votes">
              {song.submission_count} Votes
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
  
  export default Full_Leaderboard;
  