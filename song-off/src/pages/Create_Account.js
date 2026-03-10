import React, { useEffect } from 'react';
import Account_Creation from '../components/Account_Creation.js';
import useProtect from '../hooks/useProtect.js';
import { getCurrentUser } from '../services/userService.js';
import { useNavigate } from 'react-router-dom';
  

  const Create_Account = () =>  {

  const navigate = useNavigate();

  useEffect(() =>{
    async function checkLoggedIn(){
      const user = await getCurrentUser();
      if(!user){
        return
      } else{
        alert("User is already logged in");
        navigate("/home")
      }
    }
    checkLoggedIn();
  }, [])

	return (
        <Account_Creation/> 
	);
  }
  
  export default Create_Account;
  