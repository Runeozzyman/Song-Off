import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../services/userService';
  
export default async function useProtect(alertMessage="Login to view this page"){
    
    const[checking, setChecking] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        async function checkUser(){
            const user = await getCurrentUser();

            if (!user){
                alert(alertMessage);
                navigate("/");
            } else{
                setChecking(false);
            }
        }
        checkUser();
    }, [navigate]);

    return checking;
}