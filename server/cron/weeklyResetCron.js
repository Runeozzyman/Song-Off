import cron from 'node-cron';
import { runSubmissionReset } from '../jobs/resetLeaderboard';

//CRON Syntax: min hr day month weekday -> This runs every sunday at midnight
cron.schedule("0 0 * * 0", async () => {
    console.log("[RESET CRON] Running weeekly reset")

    try{
        await runSubmissionReset();
    } catch(err){
        console.error("Reset cron failed");
    }
});