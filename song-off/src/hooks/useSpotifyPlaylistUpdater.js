import { useEffect, useRef } from "react";
import { supabase } from "../lib/supabase";
import { getTopNSongs } from "../services/songService";

export function useTop25PlaylistUpdater() {
  const lastRankingRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const top25 = await getTopNSongs(25);
        console.log("Top 25 songs from Supabase:", top25);

      
        const newRanking = top25
          .map(s => s.submitted_track_id)
          .filter(Boolean);

        if (!newRanking.length) {
          console.log("No valid Spotify IDs found, skipping update.");
          return;
        }

        
        const uris = newRanking.map(id => `spotify:track:${id}`);

        console.log("Spotify URIs being sent:", uris);

        const lastRanking = lastRankingRef.current;
        const hasChanged =
          newRanking.length !== lastRanking.length ||
          newRanking.some((id, i) => id !== lastRanking[i]);

        if (hasChanged) {
          const response = await fetch("http://localhost:4000/api/spotify/update-playlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ uris }),
          });

          const data = await response.json();
          console.log("Backend response:", data);

          lastRankingRef.current = newRanking;
          console.log("Playlist update triggered!");
        } else {
          console.log("Ranking unchanged, no update needed.");
        }
      } catch (err) {
        console.error("Failed to check/update top 25 playlist:", err);
      }
    }, 5 * 60 * 1000); 

    return () => clearInterval(interval);
  }, []);
}