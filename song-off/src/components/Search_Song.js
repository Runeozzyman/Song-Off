import React from 'react';
import { useState, useEffect } from "react";
import "./component-css/Search_Song.css";
import Spotify_Player from './Spotify_Player';

const Search_Song = () => {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

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

  return (
    <div className="search-container">
      <h2>Search Songs</h2>

      {selectedTrack && (
        <div className="selected-song">
            <h3>Selected Song</h3>
            <Spotify_Player trackID={selectedTrack.id} />
        </div>
        )}

      <input
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a song..."
      />

      <div className="results">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="song-card"
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
                {track.artists.map(a => a.name).join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search_Song;