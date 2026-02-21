import { useLocation, useParams } from 'react-router-dom';
import { getRoomPlayers } from '../services/roomService';
import Player_List from '../components/Player_List.js';

const Lobby = () => {
    
  const location = useLocation();
  const { roomCode } = useParams();
  const roomName = location.state?.roomName ?? 'Room';
  console.log("this is the room code: " , roomCode);

  
  return (
    <div>
      <h1>{roomName}</h1>
      <h2>Room Code: {roomCode}</h2>
      <Player_List/>
    </div>
  );
};

export default Lobby;