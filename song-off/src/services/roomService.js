import { supabase } from "../lib/supabase";
import { getUserID, getUsername } from "../utils/user";


export async function joinRoom(roomCode){

    const id = getUserID();
    const username = getUsername();

    const {data: room, error: roomError} = await supabase
        .from("rooms")
        .select("id")
        .eq("room_code", roomCode)
        .single()

    if (roomError || !room){
        throw new Error("Room not found")
    }

    const {data: existingPlayer } = await supabase
        .from("room_players")
        .select("id")
        .eq("room_id", room.id)
        .eq("user_id", id)
        .maybeSingle()

    if(existingPlayer){
        return {success: true, message: "already in room"}
    }

    const {data, error: insertError } = await supabase
        .from("room_players")
        .insert({
            room_id: room.id,
            user_id: id,
            username: username
        })
    
    if (insertError) throw insertError;
    return data;
}


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


  