import React, { useContext } from 'react'
// import Home from '../Not_login/home';
// import PastRecord from './pastRecord';
import { NavLink, Navigate } from 'react-router-dom';
// import './patientnavbar.css'
import { Context } from '../..';
import axios from 'axios';
import toast from 'react-hot-toast';

const MedicalNavbar = () => {
  const { isAuthenticatedMedical, setIsAuthenticatedMedical , loading , setLoading} =  useContext(Context);
  
  
  
  if(!isAuthenticatedMedical) {
    return <Navigate to="/"/>
  }  



  const logoutHandler = async()=>{
    
    setLoading(true);
    try {
     await axios.get("http://localhost:4000/api/v1/users/logout" , 
      {   
       withCredentials:true,
      }
      )
      
     toast.success("Logged out succesfully");
     setIsAuthenticatedMedical(false);
     setLoading(false);
    }
    catch (error) {
       toast.error(error.response.data.message);
       setIsAuthenticatedMedical(true);
       setLoading(false);
    }
   
  };

  
  
  
  return (
    
    <div className='navbar'>

      <NavLink className='com' to="/medicalHome"> Home</NavLink>
      <NavLink className='com' to="/medicalPastrecord"> Past Records</NavLink>

      {/* <NavLink className='com' to="/doctorProfileDetail">Profile</NavLink> */}
      <button disabled={loading} onClick={logoutHandler}>Logout</button>

    </div>
    
  )
}

export default MedicalNavbar ;

