import React, { useEffect } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './component-css/Login_Box.css'; 
import { getCurrentUser, userLogin } from '../services/userService';

  const Login_Box = () =>  {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    async function protectPage() {
        const user = await getCurrentUser();

        if(user){
            navigate("/home");
            return;
        }

        setLoading(false);
    }

    async function login(e) {
        e.preventDefault();

        try{
            const result = await userLogin(email,password);
            console.log(result);
            navigate("/");
        }

        catch{
            setError("Incorrect Username or Password");
        }
    }

    useEffect(() =>{
        protectPage();
    })

    if (loading) return null;

	return (
      <form className='userInfo' onSubmit={login}>

        <h1>Login</h1>
        
            <input 
                id='email'
                type="email" 
                placeholder='Email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        
        
            <input 
                id='password'
                type="text" 
                placeholder='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        

        <button>Login</button>
        
        <Link to="/create-account" style={{textDecoration: 'none',color: 'inherit'}}><h2>create account</h2></Link>
	  

     </form> 
	);
  }
  
  export default Login_Box;
  