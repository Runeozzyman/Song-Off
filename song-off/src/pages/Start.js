import React from 'react';
import { useState, useEffect } from 'react';


  const Start = () =>  {
  
  function generateRandomUsername(){
    const adjectives = ["Swift", "Mellow", "Funky", "Groovy", "Chill", "Vibrant", "Lively", "Smooth"];
    const nouns = ["Beats", "Rhythms", "Tunes", "Melodies", "Harmonies", "Vibes", "Chords", "Notes"];
    const num = Math.floor(Math.random() * 1000);

    const chosenAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const chosenNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const user = chosenAdjective + chosenNoun + num;

    return user
  }
  
  const [username, setUsername] = useState("");

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
	  <div>
        <h1>Start Page: Hello {username}</h1>
	  </div>
	);
  }
  
  export default Start;
  