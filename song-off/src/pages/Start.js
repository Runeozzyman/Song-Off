import React from 'react';
import Room_Navigation from '../components/Room_Navigation.js'
import { useState, useEffect } from 'react';

  const Start = () =>  {
  
  const [username, setUsername] = useState(""); //reminder: useState argument is for setting defaul val

  //self explanatory...
  function generateRandomUsername(){
    const adjectives = ["Swift", "Mellow", "Funky", "Groovy", "Chill", "Vibrant", "Lively", "Smooth"];
    const nouns = ["Beats", "Rhythms", "Tunes", "Melodies", "Harmonies", "Vibes", "Chords", "Notes"];
    const num = Math.floor(Math.random() * 1000);

    const chosenAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const chosenNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const user = chosenAdjective + chosenNoun + num;

    return user
  }

  //Pulling username from session storage, or generating if none exists
  useEffect(() => {

    const storedUsername = sessionStorage.getItem("username");

    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      const newUsername = generateRandomUsername();
      sessionStorage.setItem("username", newUsername);
      setUsername(newUsername);
    }

  }, []);
  
  
	return (
	  <div className='room-navigation'>
        <h1 style={{color: "#fff702cc", textAlign: "center" , fontWeight: "200"}}>Hello, {username}</h1>
        <Room_Navigation />
	  </div>
	);
  }
  
  export default Start;
  