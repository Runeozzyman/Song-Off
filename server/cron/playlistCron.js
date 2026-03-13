import cron from 'node-cron';
import { updatePlaylist } from '../jobs/updatePlaylist.js';

cron.schedule("*/1 * * * *", async () => {
  console.log("Running hourly playlist update");

  try {
    await updatePlaylist();
  } catch (err) {
    console.error("Playlist cron failed:", err);
  }
});