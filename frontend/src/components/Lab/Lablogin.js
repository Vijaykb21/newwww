import React, { useContext, useState } from 'react'

import axios from "axios" ;
import { Link, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Context } from '../..';
import Navbar from '../Not_login/navbar';

export default function Lablogin() {
     
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {isAuthenticatedLab , setIsAuthenticatedLab, loading , setLoading} = useContext(Context);
  
    
    // axios.defaults.withCredentials = true ;
    const submitHandler = async(e)=>{
         
      e.preventDefault();
      setLoading(true);
      try {
       const {data} = await axios.post("http://localhost:4000/api/v1/users/lablogin" , 
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
       
        setIsAuthenticatedLab(true);
    //    setUser(user);
       setLoading(false);
       toast.success(data.message)
      }
      catch (error) {
         toast.error(error.response.data.message);
         setIsAuthenticatedLab(false);
         setLoading(false);
    
      }
     
    };

    
    if(isAuthenticatedLab){
      return <Navigate to={"/labHome"}/> ; 
    }

    return (
    <>

    <Navbar/>
    <h1 style={{ textAlign: "center" }}> Lab Login Page</h1>  

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