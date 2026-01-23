import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './component-css/Room_Creation.css'

  const Room_creation = () =>  {

    const navigate = useNavigate();
    
    const [roomName, setRoomName] = useState('New Room');
    const [players, setPlayers] = useState(2);
    const [rounds, setRounds] = useState(3);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);


    //what exactly is an async function??
    async function handleSubmit(e){
    
      e.preventDefault();
      setStatus('submitting');

      try{
        await(checkRoomInfo);
        setStatus('created');
        navigate('created-room');
      }

      catch (err) {
        setStatus('failed');
        setError(err);
      }

    }

    function checkRoomInfo(players, rounds){

      setTimeout(() => {

        if(players > 4 || players < 2){
          throw new Error('Players must be between 2 and 4');
        }

        if(rounds > 10 || rounds < 2){
          throw new Error('Number of rounds must be between 2 and 10');
        }

    }, 1500); 

    }


    //TODO: Review React input best practices

	return (
	  <div className = "new-room-info">
        
      <form onSubmit={handleSubmit}>
        <h1>New Room</h1>
        <input 
          type = "text" 
          placeholder = "Room Name" 
          value = {roomName}
          onChange = {(e) => setRoomName(e.targetValue)}
        />

        <h1>Number of Players</h1>
        <input type = "number" 
          min = {2} 
          max = {4} 
          placeholder='2' 
          value = {players}
          onChange={(e) => setPlayers(e.targetValue)}
         />

        <h1>Number of Rounds</h1>
        <input 
          type = "number" 
          min = {1} 
          max = {10} 
          placeholder='1' 
          value = {rounds}
          onChange = {(e) => setRounds(e.targetValue)}
        />
        <br></br>

        <button>Create Room</button>
      
      </form>

	  </div>
	);
  }
  
  export default Room_creation;
  