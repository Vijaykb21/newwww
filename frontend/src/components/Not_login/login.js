import React, { useContext, useState } from 'react'
import './navbar.css'
import Navbar from './navbar'
import axios from "axios" ;
import { Link, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Context } from '../..';

export default function Login() {
     
    const [pfnumber, setPfnumber] = useState('');
    const [password, setPassword] = useState('');
    const {isAuthenticated , setIsAuthenticated  , loading , setLoading, user, setUser} = useContext(Context);
  
    
    // axios.defaults.withCredentials = true ;
    const submitHandler = async(e)=>{
         
      e.preventDefault();
      setLoading(true);
      try {
       const {data} = await axios.post("http://localhost:4000/api/v1/users/login" , 
        {
             pfnumber, 
             password,
         
        }
        ,{
         headers:{
           "Content-Type": "application/json",
        },
        withCredentials : true,
           
        }

        )
        // console.log(response.headers);
       
       setIsAuthenticated(true);
      //  setUser(user);
       setLoading(false);
       toast.success(data.message)
      }
      catch (error) {
         toast.error(error.response.data.message);
         setIsAuthenticated(false);
         setLoading(false);
    
      }
     
    };

    
    if(isAuthenticated){
      return <Navigate to={"/profile"}/> ; 
    }

    return (
    <>

    <Navbar/>
    <h1 style={{ textAlign: "center" }}>Login Page</h1>  

    <form onSubmit={submitHandler}>
    <div className='form'>

      <input type="text" name="pfnumber" value={pfnumber} onChange={(e)=>{setPfnumber(e.target.value)} } placeholder='PF number' required /><br />
      <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)} } placeholder='Password' required /><br />

      <button disabled={loading} type='submit' > Submit</button>
      <h1>OR</h1>
      <Link to="/emailVerfication"> Sign Up </Link>
      </div>
       
    </form>
    </>
  )
}