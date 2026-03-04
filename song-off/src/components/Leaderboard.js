import React from 'react';
import { useEffect, useState } from 'react';
import './component-css/Leaderboard.css'  
import { getTopNSongs } from '../services/songService';
import Spotify_Player_Small from './Spotify_Player_Small';

  const Leaderboard = () =>  {

    const [songs, setSongs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () =>{
        async function fetchLeaderboard() {

            try{
                const data = await getTopNSongs(10);
                setSongs(data);
            } catch (err){
                console.error(err)
            } finally{
                setLoading(false);
            }
        }

        fetchLeaderboard();

    }, []);

    if(loading) return<p>Loading leaderboard...</p>
    if (error) return <p>{error}</p>

	return (
	<div className="leaderboard">
  
        <div className="leaderboard-header">
            <h1>Top 10</h1>
        </div>

        <div className="leaderboard-list">
            {songs.map((song, index) => (
            <div key={song.submitted_track_id} className="leaderboard-item">
                <div className="rank">
                {index + 1}
                </div>

                <Spotify_Player_Small trackID={song.submitted_track_id} />
            </div>
            ))}
        </div>

    </div>
	);
  }
  
  export default Leaderboard;
  