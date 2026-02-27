import { supabase } from "../lib/supabase";
import {getUsername} from "./userService.js"


export async function submitSelectedSong(trackID) {

    const username = await getUsername();

    const {error} = await supabase
        .from("profiles")
        .update({
            submitted: true,
            submitted_track_id: trackID
        })
        .eq("username", username)

    if(error) throw error;

    return;
}

export async function getSubmittedSong() {
    
    const username = await getUsername();

    const {data, error} = await supabase
        .from("profiles")
        .select("submitted_track_id")
        .eq("username", username)
    
        if (error) throw error;

    return data[0]?.submitted_track_id || null;

}