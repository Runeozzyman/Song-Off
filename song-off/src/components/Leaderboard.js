import React, { useEffect, useState, memo } from 'react';
import './component-css/Leaderboard.css';
import { getTopNSongs } from '../services/songService';
import LazyLoad from 'react-lazyload';
import Spotify_Player_Small from './Spotify_Player_Small';
import { Link } from 'react-router-dom';

const MemoizedSpotifyPlayer = memo(({ trackID }) => (
  <Spotify_Player_Small trackID={trackID} />
));

const Leaderboard = () => {
  const [songs, setSongs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const cached = sessionStorage.getItem('top10Songs');
        if (cached) {
          console.log('retrieving songs from session storage');
          setSongs(JSON.parse(cached));
          setLoading(false);
          return;
        }

        const data = await getTopNSongs(10);
        setSongs(data);
        console.log('storing songs in session storage');
        sessionStorage.setItem('top10Songs', JSON.stringify(data));
      } catch (err) {
        console.error('Failed to fetch top songs:', err);
        setError('Failed to load leaderboard');
      } finally {
        setLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h1>Top 10</h1>
      </div>

      <div className="leaderboard-list">
        {songs.map((song, index) => (
          <div key={song.submitted_track_id} className="leaderboard-item">
            <div className="rank">{index + 1}</div>

            <LazyLoad height={80} offset={50} once>
              <MemoizedSpotifyPlayer trackID={song.submitted_track_id} />
            </LazyLoad>
          </div>
        ))}
        <Link to='/leaderboard'><div className='link-to-full-leaderboard'>See full leaderboard here</div></Link>
      </div>
    </div>
  );
};

export default Leaderboard;