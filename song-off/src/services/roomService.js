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
    
    const roomID = room.id;
    sessionStorage.setItem("roomID", roomID);

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
            room_id: roomID,
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

export async function deleteRoomPlayer(user_id) {

    const {error} = await supabase
        .from("room_players")
        .delete()
        .eq("user_id", user_id)
    
    if (error) throw error;

    return true;

}

export function subscribeToRoomPlayers(roomId, userID, username, setPlayers) {
  const channel = supabase.channel(`room:${roomId}`, {
    config: { presence: { key: userID } }
  });

  // helper to update state
  const updatePlayers = () => {
    const state = channel.presenceState();

    const players = Object.keys(state).map(id => ({
      userID: id,
      ...(state[id]?.[0] || {})
    }));

    setPlayers(players);
  };

  // fires when full state syncs
  channel.on("presence", { event: "sync" }, updatePlayers);

  // fires instantly when someone joins
  channel.on("presence", { event: "join" }, updatePlayers);

  // fires instantly when someone leaves
  channel.on("presence", { event: "leave" }, updatePlayers);

  channel.subscribe(async status => {
    if (status === "SUBSCRIBED") {
      await channel.track({
        userID,
        username
      });
    }
  });

  return () => channel.unsubscribe();
}
  