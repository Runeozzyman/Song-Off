import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomPlayers } from '../services/roomService';
import { subscribeToRoomPlayers } from "../services/roomService";
import { supabase } from "../lib/supabase";

const Player_List = () => {
  const { roomCode } = useParams();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (!roomCode) return;

    let channel;

    async function refreshPlayers() {
      const data = await getRoomPlayers(roomCode);
      console.log("getPlayers responseL: ", data);
      setPlayers(data);
    }

    async function setup() {

      await refreshPlayers();

      channel = await subscribeToRoomPlayers(roomCode, refreshPlayers);
    }

    setup();

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, [roomCode]);

  return (
    <div>
      <ul>
        <h2>Here are the active players:</h2>
        {players.map((username, index) => (
          <li key={index}>{username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Player_List;