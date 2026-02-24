import Player_List from '../components/Player_List.js';
import Room_Info from '../components/Room_Info.js';

const Lobby = () => {

  return (
    <div>
      <Room_Info/>
      <Player_List />
    </div>
  );
};

export default Lobby;