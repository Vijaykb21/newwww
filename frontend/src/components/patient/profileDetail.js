import React, { useContext } from 'react'
import PatientNavbar from './PNavbar'
import { Context } from '../..';
import { Navigate } from 'react-router-dom';

const ProfileDetail = () => {
  const {isAuthenticated} = useContext(Context);
    if(!isAuthenticated) {
        return <Navigate to="/"/>
      }
    return (
    <div>
      <PatientNavbar/>
      <h1>Patient Profile Detail Page</h1>
    </div>
  )
}

export default ProfileDetail
