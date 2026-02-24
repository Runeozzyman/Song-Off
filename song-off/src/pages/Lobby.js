import { useLocation, useParams } from 'react-router-dom';
import { deleteRoomPlayer, getRoomPlayers, subscribeToRoomPlayers } from '../services/roomService';
import Player_List from '../components/Player_List.js';
import { useEffect, useState } from 'react';
import { getUserID } from '../utils/user.js';
import { getRoomID } from '../utils/room.js';

const Lobby = () => {
  const location = useLocation();
  const { roomCode } = useParams();

  const userID = getUserID();
  const roomID = getRoomID();

  const [players, setPlayers] = useState([]); // ✅ fixed

  const roomName = location.state?.roomName ?? "Room";

  return (
    <div>
      <h1>{roomName}</h1>
      <h2>Room Code: {roomCode}</h2>
      <Player_List />
    </div>
  );
};

export default Lobby;