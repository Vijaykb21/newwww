import React, { useContext } from 'react'
import Home from '../Not_login/home';
// import PastRecord from './pastRecord';
import { NavLink, Navigate } from 'react-router-dom';
// import './patientnavbar.css'
import { Context } from '../..';
import axios from 'axios';
import toast from 'react-hot-toast';

const DoctorNavbar = () => {
  const { isAuthenticatedDoctor ,setIsAuthenticatedDoctor , loading , setLoading} =  useContext(Context);
   
  

  const logoutHandler = async()=>{
    
    setLoading(true);
    try {
     await axios.get("http://localhost:4000/api/v1/users/logout" , 
      {   
       withCredentials:true,
      }
      )
      
     toast.success("Logged out succesfully");
     setIsAuthenticatedDoctor(false);
     setLoading(false);
    }
    catch (error) {
       toast.error(error.response.data.message);
       setIsAuthenticatedDoctor(true);
       setLoading(false);
    }
   
  };

//   if(isAuthenticatedDoctor){
//     return <Navigate to="/doctorHome"/> ; 
//   }
  
  
  return (
    
    <div className='navbar'>

      <NavLink className='com' to="/doctorHome"> Home</NavLink>
      <NavLink className='com' to="/doctorProfileDetail">Profile</NavLink>
      <button disabled={loading} onClick={logoutHandler}>Logout</button>

    </div>
    
  )
}

export default DoctorNavbar;
