import { supabase } from "../lib/supabase";

export async function createRoom(roomCode, roomName, players, rounds){

    const {data, error} = await supabase
        .from("rooms")
        .insert([{room_code: roomCode , 
                  room_name: roomName, 
                  max_players: players, 
                  rounds: rounds}])
        .select()

    if(error) throw error
    return data

}


  