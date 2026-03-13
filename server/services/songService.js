import { supabase } from "../lib/supabase.js";

export async function getTopNSongs(numSongs = 10) {
    
    const {data, error} = await supabase
        .rpc('get_top_songs', {limit_count: numSongs});
    
    if (error) throw error;
    
    return data;
}