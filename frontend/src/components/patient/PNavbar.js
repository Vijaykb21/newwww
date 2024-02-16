import React, { useContext } from 'react'
import Home from '../Not_login/home';
import PastRecord from './pastRecord';
import { NavLink } from 'react-router-dom';
import './patientnavbar.css'
import { Context } from '../..';
import axios from 'axios';
import toast from 'react-hot-toast';

const PatientNavbar = () => {
  const {isAuthenticated , setIsAuthenticated , loading , setLoading} =  useContext(Context);

  const logoutHandler = async()=>{
    
    setLoading(true);
    try {
     await axios.get("http://localhost:4000/api/v1/users/logout" , 
      {   
       withCredentials:true,
      }
      )
      
     toast.success("Logged out succesfully");
     setIsAuthenticated(false);
     setLoading(false);
    }
    catch (error) {
       toast.error(error.response.data.message);
       setIsAuthenticated(true);
       setLoading(false);
    }
   
  };

  
  
  
  return (
    
    <div className='navbar'>

      <NavLink className='com' to="/patientHome"> Home</NavLink>
      <NavLink className='com' to="/pastRecord"> Past_Record</NavLink>
      <NavLink className='com' to="/profileDetail">Profile</NavLink>
      <button onClick={logoutHandler}>Logout</button>

    </div>
    
  )
}

export default PatientNavbar;
