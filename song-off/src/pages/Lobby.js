import { useLocation, useParams } from 'react-router-dom';
import { getRoomPlayers } from '../services/roomService';

const Lobby = () => {
    
  const location = useLocation();
  const { roomCode } = useParams();
  const roomName = location.state?.roomName ?? 'Room';

  
  return (
    <div>
      <h1>{roomName}</h1>
      <h2>Room Code: {roomCode}</h2>
      <h2>Players in Lobby: </h2>
    </div>
  );
};

export default Lobby;