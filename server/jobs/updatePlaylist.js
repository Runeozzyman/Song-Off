import { getTopNSongs } from "../services/songService.js";
import { getSpotifyUserAccessToken } from "../routes/spotify_auth.js";

export async function updatePlaylist() {

  const PLAYLIST_ID = process.env.SPOTIFY_PLAYLIST_ID;

  const songs = await getTopNSongs(25);

  console.log("PLAYLIST ID:", PLAYLIST_ID);
  console.log("----------------------------")
  console.log("SONGS:", songs);
  console.log("----------------------------")

  if (!songs || songs.length === 0) {
    console.log("No songs found");
    return;
  }

  const uris = songs.map(song => `spotify:track:${song.submitted_track_id}`);

  const accessToken = await getSpotifyUserAccessToken();

  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uris }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Spotify API error:", errorData);
    return;
  }

  console.log("Playlist updated successfully!");
}