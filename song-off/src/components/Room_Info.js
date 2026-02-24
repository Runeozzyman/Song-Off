import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Player_List from '../components/Player_List.js';
import { getRoomName } from '../services/roomService.js';
import { getRoomID } from '../utils/room.js';
import { useEffect, useState } from 'react'; 
import './component-css/Room_Info.css';

  const Room_Info = () =>  {

    const { roomCode } = useParams();
    const roomID = getRoomID();
    const [roomName, setRoomName] = useState();

    useEffect(() =>{
        async function fetchRoomName() {
        if(!roomID) return;

        const name = await getRoomName(roomID);
        setRoomName(name);

        }

        fetchRoomName();
    }, [roomID]);


	return (
	<div className='room-information'>
      <h1>{roomName}</h1>
      <h2>Room Code: {roomCode}</h2>
    </div>
	);
  }
  
  export default Room_Info;
  