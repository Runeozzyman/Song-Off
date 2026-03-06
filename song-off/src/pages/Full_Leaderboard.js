import React from 'react';
import { useState, useEffect, memo } from 'react';
import { getTopNSongs } from '../services/songService';
import { Audio } from 'react-loader-spinner';
import './page-css/Full_Leaderboard.css';
import LazyLoad from 'react-lazyload';
import Spotify_Player_Small from '../components/Spotify_Player_Small';
  
  const Full_Leaderboard = () =>  {

    const [songs, setSongs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [testBool, setTestBool] = useState(true);

    const MemoizedSpotifyPlayer = memo(({ trackID }) => (
    <Spotify_Player_Small trackID={trackID} />
    ));

    useEffect(() =>{
        async function getTop50Songs(){
            try{
                const cached = sessionStorage.getItem('top50Songs');
                if(cached){
                    setSongs(JSON.parse(cached));
                    setLoading(false);
                    return;
                } else{
                    const res = await getTopNSongs(50);
                    setSongs(res);
                    sessionStorage.setItem('top50Songs', JSON.stringify(res));
                }
            } catch (err){
                    console.error('Failed to fetch full leaderboard', err);
                    setError('Failed to load leaderboard');
            } finally{
                setLoading(false);
                console.log("SONGS:", songs)
            }
        }

        getTop50Songs();

    }, []);

    if (loading) return<Audio 
                        height="80"
                        width="80"
                        radius="9"
                        color="#fff702cc"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{ margin: '20px' }}
                        wrapperClass="custom-loader"
                        visible={true}
                    />
	return (
  <div className="full-leaderboard">
    <div className="full-leaderboard-header">
      <h1>Top 50</h1>
    </div>
    <div className='divider'></div>
    <div className="leaderboard-list">
      <div className="leaderboard-items">
        {songs.map((song, index) => (
          <div key={song.submitted_track_id} className="leaderboard-item">
            <div className="rank">{index + 1}</div>

            <LazyLoad height={80} offset={50} once>
              <MemoizedSpotifyPlayer trackID={song.submitted_track_id} />
            </LazyLoad>
            <div className='votes'>{song.submission_count} Votes</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
  }
  
  export default Full_Leaderboard;
  