import React, { useContext, useState } from 'react'
import './navbar.css'
import Navbar from './navbar'
import axios from "axios" ;
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
import { Context } from '../..';
import { Navigate } from 'react-router-dom';



export default function Register() {
    //  const history = useNavigate() ; 
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [pfnumber, setPfnumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const {isAuthenticated , setIsAuthenticated , loading , setLoading} =  useContext(Context);

    

    
    const submitHandler = async(e)=>{
         
      e.preventDefault();
      setLoading(true);   
      try {
       const {data} = await axios.post("http://localhost:4000/api/v1/users/register" , 
        {
             firstname,
             lastname,
             username,
             pfnumber, 
             password,
             email,
        }
        ,{
         headers:{
           "Content-Type": "application/json",
         },
         withCredentials: true,
        }
        )
        
       toast.success(data.message);
       setIsAuthenticated(true);
       setLoading(false);
    
      }
      catch (error) {

        setIsAuthenticated(false);

        if(error.response){
          const {data} = error.response ;
          toast.error(data.message);
        }
          setLoading(false);
      }
     
    };


    if(isAuthenticated){
      return <Navigate to={"/profile"}/> ; 
    }

    return (
    <>

    <Navbar/>
    <h1 style={{ textAlign: "center" }}>Register Page</h1>  

    <form onSubmit={submitHandler}>
    <div className='form'>

      <input type="string" name="firstname" value={firstname} onChange={(e)=>{setFirstname(e.target.value)} } placeholder="First number" required /><br />
      <input type="text" name="lastname" value={lastname} onChange={(e)=>{setLastname(e.target.value)} } placeholder='lastname' required  /><br />
      <input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)} } placeholder='username' required /><br />
      <input type="text" name="pfnumber" value={pfnumber} onChange={(e)=>{setPfnumber(e.target.value)} } placeholder='PF number' required /><br />
      <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)} } placeholder='Password' required /><br />
      <input  name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' pattern=".+@iitk\.ac\.in" title="Please enter a IITK email address" required /><br />

      <button disabled = {loading} type='submit' > Submit</button>
      <h1>OR</h1>
      <Link to="/login"> Login</Link>
      </div>
       
    </form>
    </>
  )
}