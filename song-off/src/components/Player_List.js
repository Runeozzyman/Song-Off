import { useEffect, useState } from "react";
import { subscribeToRoomPlayers } from "../services/roomService";
import { getUserID, getUsername } from "../utils/user";
import { getRoomID } from "../utils/room";
import './component-css/Player_List.css';

const Player_List = () => {
  const [players, setPlayers] = useState([]);

  const roomID = getRoomID(); // ✅ FIXED
  const userID = getUserID();
  const username = getUsername();

  useEffect(() => {
    if (!roomID || !userID) {
      console.log("Missing roomID or userID");
      return;
    }

    const unsubscribe = subscribeToRoomPlayers(
      roomID,
      userID,
      username,
      setPlayers
    );

    return unsubscribe;
  }, [roomID, userID, username]);

  return (
    <div className="playersInfo">
      <h1>Players in Lobby</h1>
      <div className="divider"></div>
      {players.map(player => (
        <div className="playerText"key={player.userID}>
          {player.username}
        </div>
      ))}
    </div>
  );
};

export default Player_List;