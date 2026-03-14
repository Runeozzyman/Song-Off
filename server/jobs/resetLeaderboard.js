import { resetSubmissions } from "../services/songService.js";

export async function runSubmissionReset() {
    console.log("Running weekly submission reset....")

    try{
        await resetSubmissions();
    } catch (err){
        console.error("Submission reset failed", err);
    }
    
}