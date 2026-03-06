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

    sessionStorage.removeItem("top50Songs");
    sessionStorage.removeItem("top10Songs");

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

export async function getTopNSongs(numSongs = 10) {
    
    const {data, error} = await supabase
        .rpc('get_top_songs', {limit_count: numSongs});
    
    if (error) throw error;
    
    return data;
}