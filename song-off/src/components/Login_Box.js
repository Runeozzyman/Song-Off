import React from 'react';
import {Link } from 'react-router-dom';
import './component-css/Login_Box.css'; 

  const Login_Box = () =>  {

    //add logic for login


	return (
      <form className='userInfo'>

	  
        <h1>Login</h1>
        
            <input type="text" placeholder='Username' id='username'></input>
        
        
            <input type="text" placeholder='Password' id='password'></input>
        

        <button>Login</button>
        
        <Link to="/create-account" style={{textDecoration: 'none',color: 'inherit'}}><h2>create account</h2></Link>
	  

     </form> 
	);
  }
  
  export default Login_Box;
  