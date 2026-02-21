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

export async function getRoomPlayers(roomCode) {

    const { data: room, error: roomError } = await supabase
        .from("rooms")
        .select("id")
        .eq("room_code", roomCode)
        .maybeSingle();

        console.log("ROOM: ", room);

    if (roomError) throw roomError;
    if (!room) throw new Error("Room not found");

  
    const { data, error } = await supabase
        .from("room_players")
        .select("username")
        .eq("room_id", room.id);

    console.log("PLAYERS RAW: ", data);    

    if (error) throw error;

    return data.map(p => p.username);
        
}

export async function subscribeToRoomPlayers(roomCode, onChange){

    const { data: room } = await supabase
        .from("rooms")
        .select("id")
        .eq("room_code", roomCode)
        .maybeSingle();

    if (!room) throw new Error("Room not found");

    return supabase
        .channel(`room-${room.room_code}`)
        .on(
        "postgres_changes",
        {
            event: "*",
            schema: "public",
            table: "room_players",
            filter: `id=eq.${room.id}`
        },
        onChange
        )
        .subscribe();
    
}
  