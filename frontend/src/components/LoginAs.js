import React from 'react'
import './loginAs.css'
import { Link } from 'react-router-dom'
const LoginAs = () => {
  return (
 

<div className='btns'>
    <h1>Login As</h1>
  <Link to="/login"><button className='btn'><h2>Patient</h2></button></Link><br />
  <Link to="/doctorlogin"><button className='btn'><h2>Doctor</h2></button></Link><br />
  <Link to="/receptionlogin"><button className='btn'><h2>Reception</h2></button></Link><br />
  <Link to="/nurselogin"><button className='btn'><h2>Nurse</h2></button></Link><br />
  <Link to="/medicallogin"><button className='btn'><h2>Medical</h2></button></Link><br />
  <Link to="/apollologin"><button className='btn'><h2>Apollo</h2></button></Link><br />
  <Link to="/lablogin"><button className='btn'><h2>Lab</h2></button></Link><br />
</div>
   
  )
}

export default LoginAs
