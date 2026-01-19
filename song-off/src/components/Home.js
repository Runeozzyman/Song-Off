import React from 'react';
import {Link } from 'react-router-dom';
import './component-css/Home.css';
import { SlControlPlay } from "react-icons/sl";


  const Home = () =>  {

  const [username, setUsername] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

	return (

	<div className="Home-box">

    <div className="Content-box">
      
      
      <h2 className="Description-title">Think you've got good Taste? Prove it.
        <Link to = "/start">
        <button className = "play-button"><SlControlPlay  size={30}/></button>
        </Link>
      </h2>
      
    </div>

  </div>



	);
  }
  
  export default Home;
  