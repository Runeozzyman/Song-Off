import { useEffect, useState } from "react";
import { subscribeToRoomPlayers } from "../services/roomService";
import { getUserID, getUsername } from "../utils/user";
import { getRoomID } from "../utils/room";

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
    <div>
      <h2>Players in Lobby</h2>

      {players.map(player => (
        <div key={player.userID}>
          {player.username}
        </div>
      ))}
    </div>
  );
};

export default Player_List;