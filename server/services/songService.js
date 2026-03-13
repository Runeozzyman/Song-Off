import { supabase } from "../lib/supabase.js";

export async function getTopNSongs(numSongs = 10) {
    
    const {data, error} = await supabase
        .rpc('get_top_songs', {limit_count: numSongs});
    
    if (error) throw error;
    
    return data;
}

export async function resetSubmissions(){

    const {error} = await supabase
        .from("profiles")
        .update({submitted_track_id: null})
        .neq("id",0);
    
    if (error){
        console.error("Error resetting submissions");
        throw error;
    }

    console.log("Weekly Submissions Reset");
}