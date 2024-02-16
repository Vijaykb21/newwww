import React, { useContext, useState } from 'react'
// import './navbar.css'

import axios from "axios" ;
import { Link, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Context } from '../..';
import Navbar from '../Not_login/navbar';

export default function Doctorlogin() {
     
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isAuthenticatedDoctor , setIsAuthenticatedDoctor, loading , setLoading} = useContext(Context);
  
    
    // axios.defaults.withCredentials = true ;
    const submitHandler = async(e)=>{
         
      e.preventDefault();
      setLoading(true);
      try {
       const {data} = await axios.post("http://localhost:4000/api/v1/users/doctorlogin" , 
        {
             email, 
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
       
        setIsAuthenticatedDoctor(true);
    //    setUser(user);
       setLoading(false);
       toast.success(data.message)
      }
      catch (error) {
         toast.error(error.response.data.message);
         setIsAuthenticatedDoctor(false);
         setLoading(false);
    
      }
     
    };

    
    if(isAuthenticatedDoctor){
      return <Navigate to="/doctorHome"/> ; 
    }

    return (
    <>

    <Navbar/>
    <h1 style={{ textAlign: "center" }}>Login Page</h1>  

    <form onSubmit={submitHandler}>
    <div className='form'>

      <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)} } placeholder='Email' required /><br />
      <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)} } placeholder='Password' required /><br />

      <button disabled={loading} type='submit' > Submit</button>
      </div>
       
    </form>
    </>
  )
}