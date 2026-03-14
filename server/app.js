import "dotenv/config";
import express from 'express';
import cors from 'cors';
import "./cron/playlistCron.js";
import "./cron/weeklyResetCron.js";
import { getSpotifyToken } from './routes/spotify_auth.js';
import { getSpotifyUserAccessToken } from "./routes/spotify_auth.js";
import { getTopNSongs } from "./services/songService.js";

const router = express.Router();
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

console.log("server running");

app.get('/' , (req, res) =>{
    res.json('root port')
});

//authenticate spotify API use
app.get("/api/spotify/token", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Failed to get token" });
  }
});
 
//fetch song by ID
app.get("/api/spotify/track/:id", async (req, res) => {
  try {
    const tokenData = await getSpotifyToken();

    const spotifyRes = await fetch(
      `https://api.spotify.com/v1/tracks/${req.params.id}`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );

    const data = await spotifyRes.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch track" });
  }
});

//spotify search function
app.get("/api/spotify/search", async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ error: "Missing search query" });
    }

    const token = await getSpotifyToken();
    const accessToken = token.access_token;

    const response = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`,
        {
            headers: {
            Authorization: `Bearer ${accessToken}`
            }
        }
    );

    const data = await response.json();

    console.log("Spotify response:", data);

    
    if (!data.tracks) {
      return res.status(500).json({
        error: "Spotify search failed",
        details: data,
      });
    }

    res.json(data.tracks.items);

  } catch (err) {
    console.error("Search failed:", err);
    res.status(500).json({ error: "Search failed" });
  }
});

const PLAYLIST_ID = process.env.SPOTIFY_PLAYLIST_ID;

//get spotify metadata for previews
app.get('/api/spotify/oembed/:trackID', async(req,res) =>{
  const { trackID } = req.params;
  try {
    const response = await fetch(
      `https://open.spotify.com/oembed?url=https://open.spotify.com/track/${trackID}`
    );

    const data = await response.json();

    res.json({
      title: data.title,
      thumbnail: data.thumbnail_url
    });

  } catch (err) {
    console.error("Spotify oEmbed error:", err);
    res.status(500).json({ error: "Failed to fetch Spotify metadata" });
  }
});


app.listen(PORT);

export default app;