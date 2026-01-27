import React from 'react';
import { useLocation } from 'react-router-dom';
import {useState} from 'react'
  
  const Created_Room = () =>  {

    const location = useLocation();
    
    const [answerA, setAnswerA] = useState('');
    const [answerB, setAnswerB] = useState('');
    const [theme, setTheme] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

   async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  try {
    console.log({answerA, answerB, theme});
    const res = await fetch(
      "http://localhost:4000/api/evaluate/compare",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          answerA,
          answerB,
          theme
        })
      }
    );

    const data = await res.json();
    console.log(data);
    setResult(data);

  } catch (err) {
    console.error("error in backend", err);
  } finally {
    setLoading(false);
  }
}


	return (
	  <div>
      <form onSubmit = {handleSubmit}>
        <input 
          className="answerA" 
          type = "text" 
          placeholder='A'
          onChange={(e) => setAnswerA(e.target.value)}
        />
        <br></br>
        <input 
          className="answerB" 
          type = "text" 
          placeholder='B'
          onChange={(e) => setAnswerB(e.target.value)}
        />
        <br></br>
        <input 
          className="theme" 
          type = "text" 
          placeholder='Theme'
          onChange={(e) => setTheme(e.target.value)}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
        
	  </div>
	);
  
  }  
  export default Created_Room;
