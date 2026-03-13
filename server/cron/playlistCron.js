import cron from 'node-cron';
import { updatePlaylist } from '../jobs/updatePlaylist.js';

//CRON Syntax: min hr day month weekday -> This runs every hour
cron.schedule("0 * * * *", async () => {
  console.log("Running hourly playlist update");

  try {
    await updatePlaylist();
  } catch (err) {
    console.error("Playlist cron failed:", err);
  }
});