import React, { useContext, useEffect } from 'react'
import PatientNavbar from './PNavbar'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const PastRecord = () => {
  const {isAuthenticated} = useContext(Context);
   
  let record = [];  
    useEffect(() => {
    
        axios.get("http://localhost:4000/api/v1/users/getpastrecords",{
        withCredentials:true,
      })
      .then(res=>{
        // setUser(res.data.user);
        console.log(res.data.record);
        record = res.data.record ;
        // console.log(user)
        // setIsAuthenticatedReception(true);
        // setIsAuthenticated(false);
        // setLoading(false);
  
      })
      .catch((error)=>{
        console.log(error.response.data.message);
       
      })
  
    }, []) 

  
  
  
  
  
  
  
  
  if(!isAuthenticated) {
        return <Navigate to="/"/>
      }
  
  return (
    <div>
       <PatientNavbar/>     
      <h1>Your Past Record !!  ha ha ha  </h1>     
    </div>
  )
}

export default PastRecord
