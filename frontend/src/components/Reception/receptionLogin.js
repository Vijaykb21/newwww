import React, { useContext, useState } from 'react'

import axios from "axios" ;
import { Link, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Context } from '../..';
import Navbar from '../Not_login/navbar';

export default function Receptionlogin() {
     
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isAuthenticatedReception , setIsAuthenticatedReception, loading , setLoading} = useContext(Context);
  

    // axios.defaults.withCredentials = true ;
    const submitHandler = async(e)=>{
         
      e.preventDefault();
      setLoading(true);
      try {
       const {data} = await axios.post("http://localhost:4000/api/v1/users/receptionlogin", 
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
       
       setIsAuthenticatedReception(true);
    //    setUser(user);
       setLoading(false);
       toast.success(data.message)
      }
      catch (error) {
         toast.error(error.response.data.message);
         setIsAuthenticatedReception(false);
         setLoading(false);
    
      }
     
    };

    
    if(isAuthenticatedReception){
      return <Navigate to={"/receptionHome"}/> ; 
    }

    return (
    <>

    <Navbar/>
    <h1 style={{ textAlign: "center" }}> Reception Login Page</h1>  

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