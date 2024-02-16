import React, { useContext } from 'react'
// import PatientNavbar from './PNavbar'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';
import MedicalNavbar from './medicalNavbar';

const MedicalPastRecord = () => {
  const {isAuthenticatedMedical} = useContext(Context);
    if(!isAuthenticatedMedical) {
        return <Navigate to="/"/>
      }
  
  return (
    <div>
       <MedicalNavbar/>     
      <h1>patients Past Record !!  ha ha ha  </h1>     
    </div>
  )
}

export default MedicalPastRecord
