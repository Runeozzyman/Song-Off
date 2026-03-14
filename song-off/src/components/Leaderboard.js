import React, { useEffect, useState } from 'react';
import './component-css/Leaderboard.css';
import { getTopNSongs } from '../services/songService';
import Spotify_Preview from './Spotify_Preview';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const data = await getTopNSongs(10);
        setSongs(data);
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
    {!songs || songs.length === 0 ? (
      <div className="leaderboard-empty"><h1>Be the first to vote!</h1></div>
    ) : (
      <>
        {songs.map((song, index) => (
          <div key={song.submitted_track_id} className="leaderboard-item">
            <div className="rank">{index + 1}</div>

            <Spotify_Preview
              trackID={song.submitted_track_id}
              image={song.album_image}
            />
          </div>
        ))}

        <Link to="/leaderboard">
          <div className="link-to-full-leaderboard">
            See full leaderboard here
          </div>
        </Link>
      </>
    )}
  </div>
</div>
  );
};

export default Leaderboard;