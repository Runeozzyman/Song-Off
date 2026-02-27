import "dotenv/config";
import express from 'express';
import cors from 'cors';
import {getSpotifyToken} from './routes/spotify_auth.js';

const router = express.Router();
const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());


app.get('/' , (req, res) =>{
    res.json('root port')
});

//authenticate API use
app.get("/api/spotify/token", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Failed to get token" });
  }
});
 

app.get("/api/spotify/track/:id", async (req, res) => {
  try {
    const token = await getSpotifyToken();

    const spotifyRes = await fetch(
      `https://api.spotify.com/v1/tracks/${req.params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
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

app.listen(PORT);

export default app;