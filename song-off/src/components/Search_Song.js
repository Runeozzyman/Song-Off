import React from 'react';
import { useState, useEffect } from "react";
import "./component-css/Search_Song.css";
import Spotify_Player from './Spotify_Player';
import { getSubmittedSong, submitSelectedSong } from '../services/songService';

const Search_Song = () => {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [submittedTrack, setSubmittedTrack] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    async function checkSubmission() {
      try {
        const submittedSong = await getSubmittedSong();
        if (submittedSong) {
          setSubmitted(true);
          setSubmittedTrack(submittedSong);
        } else {
          setSubmitted(false);
          setSubmittedTrack(null);
        }
      } catch (err) {
        console.error("Error fetching submitted song:", err);
      } finally {
        setLoading(false);
      }
    }

    checkSubmission();
  }, []);

  useEffect(() => {
  if (!query.trim()) {
    setTracks([]);
    return;
  }

  const delay = setTimeout(async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/spotify/search?q=${query}`
      );
      const data = await res.json();
      setTracks(data);
    } catch (err) {
      console.error("Search failed:", err);
    }
  }, 200);

  return () => clearTimeout(delay);
}, [query]);

  function handleSelect(track) {
    setSelectedTrack(track);
  }

  async function handleSubmitSong() {
    if (!selectedTrack) return;
    await submitSelectedSong(selectedTrack.id);
    setSubmitted(true);
    setSubmittedTrack(selectedTrack.id);
    setSelectedTrack(null);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="search-container">
      {!submitted && <h2>Search Songs</h2>}
      {!submitted && <div className='divider'></div>}
      
      {submittedTrack && (  
        <div className="submitted-song">
          <h3>Your submission</h3>
          <Spotify_Player trackID={submittedTrack} />

        </div>
      )}

      {selectedTrack && (
        <div className="selected-song">
          <h3>Selected Song</h3>
          <Spotify_Player trackID={selectedTrack.id} />
          <button onClick={handleSubmitSong}>Submit Choice</button>
        </div>
      )}

      {!submitted &&  (
        <input
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a song..."
        />
      )}
    {!submitted && (
      <div className="results">
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`song-card ${
              selectedTrack?.id === track.id ? "selected" : ""
            }`}
            onClick={() => handleSelect(track)}
          >
            <img
              className="album-cover"
              src={track.album.images?.[0]?.url}
              alt="album cover"
            />

            <div className="song-info">
              <strong className="track-title">{track.name}</strong>
              <p className="artist-name">
                {track.artists.map((a) => a.name).join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}
    </div>
  );
};

export default Search_Song;