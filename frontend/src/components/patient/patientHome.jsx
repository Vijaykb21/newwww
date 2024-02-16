import React, { useContext } from 'react'
import PatientNavbar from './PNavbar'
import { Navigate } from 'react-router-dom';
import { Context } from '../..';

const PatientHome = () => {
    const {isAuthenticated} = useContext(Context);
    
    
    if(!isAuthenticated) {
        return <Navigate to="/"/>
      }
  
    return (
    <div>
      <PatientNavbar/>
       <h1>Patient Home page</h1>
    </div>
  )
}

export default PatientHome
