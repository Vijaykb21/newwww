// import './App.css';
import {Route,Router, Routes} from 'react-router-dom';
import Home from './components/Not_login/home';
import Login from './components/Not_login/login';
import Register from './components/Not_login/register';
import { Toaster } from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from '.';
import Profile from './components/patient/userprofile';
import PastRecord from './components/patient/pastRecord';
import PatientHome from './components/patient/patientHome';
import ProfileDetail from './components/patient/profileDetail';
import EmailVerify from './components/Not_login/AccoutVerfiy';
import DoctorHome from './components/Doctor/doctorHome';
import DoctorProfile from './components/Doctor/doctorProfile';
import Doctorlogin from './components/Doctor/doctorlogin';
import LoginAs from './components/LoginAs';
import Lablogin from './components/Lab/Lablogin';
import LabHome from './components/Lab/labHome';
import ReceptionHome from './components/Reception/receptionHome';
import Receptionlogin from './components/Reception/receptionLogin';
import Nurselogin from './components/Nurse/nurselogin';
import NurseHome from './components/Nurse/nurseHome';
import Medicallogin from './components/Medical/medicalLogin';
import MedicalHome from './components/Medical/medicalHome';
import ApolloPastRecord from './components/Apollo/apollopastRecord';
import ApolloHome from './components/Apollo/apolloHome';
import Apollologin from './components/Apollo/apolloLogin';
import MedicalPastRecord from './components/Medical/pastRecord';




function App() {

  const {user , setUser ,isAuthenticatedDoctor, setIsAuthenticatedNurse,  setIsAuthenticatedMedical , setIsAuthenticatedApollo, setIsAuthenticatedLab , setIsAuthenticatedDoctor , setIsAuthenticated, setLoading, setIsAuthenticatedReception } = useContext(Context);


  useEffect(() => {

    setLoading(true);
   
    axios.get("http://localhost:4000/api/v1/users/receptionHome",{
      withCredentials:true,
    })
    .then(res=>{
      setUser(res.data.user);
      console.log(res.data.user);
      // console.log(user)
      setIsAuthenticatedReception(true);
      // setIsAuthenticated(false);
      setLoading(false);

    })
    .catch((error)=>{
      console.log(error.response.data.message);
      setUser({});
      setIsAuthenticatedReception(false);
      setLoading(false);
    })




    setLoading(true);

    axios.get("http://localhost:4000/api/v1/users/patientHome",{
      withCredentials:true,
    })
    .then(res=>{
      setUser(res.data.user);
      // console.log(res.data.message)
      // console.log(user)
      console.log(res.data.user);
      setIsAuthenticated(true);
      // setIsAuthenticatedReception(false);
      setLoading(false);

    })
    .catch((error)=>{
      console.log(error.response.data.message);
      setUser({});
      setIsAuthenticated(false);
      setLoading(false);
    })
    
    
    axios.get("http://localhost:4000/api/v1/users/doctorHome",{
      withCredentials:true,
    })
    .then(res=>{
      setUser(res.data.user);
      console.log(res.data.user);
      // console.log(user)
      setIsAuthenticatedDoctor(true);
      // setIsAuthenticated(false);
      setLoading(false);

    })
    .catch((error)=>{
      console.log(error.response.data.message);
      setUser({});
      setIsAuthenticatedDoctor(false);
      setLoading(false);
    })

     
    axios.get("http://localhost:4000/api/v1/users/labHome",{
      withCredentials:true,
    })
    .then(res=>{
      setUser(res.data.user);
      console.log(res.data.user);
      // console.log(user)
      setIsAuthenticatedLab(true);
      // setIsAuthenticated(false);
      setLoading(false);

    })
    .catch((error)=>{
      console.log(error.response.data.message);
      setUser({});
      setIsAuthenticatedLab(false);
      setLoading(false);
    })






  axios.get("http://localhost:4000/api/v1/users/apolloHome",{
    withCredentials:true,
  })
  .then(res=>{
    setUser(res.data.user);
    console.log(res.data.user);
    // console.log(user)
    setIsAuthenticatedApollo(true);
    // setIsAuthenticated(false);
    setLoading(false);

  })
  .catch((error)=>{
    console.log(error.response.data.message);
    setUser({});
    setIsAuthenticatedApollo(false);
    setLoading(false);
  })

   
  axios.get("http://localhost:4000/api/v1/users/medicalHome",{
    withCredentials:true,
  })
  .then(res=>{
    setUser(res.data.user);
    console.log(res.data.user);
    // console.log(user)
    setIsAuthenticatedMedical(true);
    // setIsAuthenticated(false);
    setLoading(false);

  })
  .catch((error)=>{
    console.log(error.response.data.message);
    setUser({});
    setIsAuthenticatedMedical(false);
    setLoading(false);
  })




  axios.get("http://localhost:4000/api/v1/users/nurseHome",{
    withCredentials:true,
  })
  .then(res=>{
    setUser(res.data.user);
    console.log(res.data.user);
    // console.log(user)
    setIsAuthenticatedNurse(true);
    // setIsAuthenticated(false);
    setLoading(false);

  })
  .catch((error)=>{
    console.log(error.response.data.message);
    setUser({});
    setIsAuthenticatedNurse(false);
    setLoading(false);
  })


  
  axios.get("http://localhost:4000/api/v1/users/receptionHome",{
    withCredentials:true,
  })
  .then(res=>{
    setUser(res.data.user);
    console.log(res.data.user);
    // console.log(user)
    setIsAuthenticatedReception(true);
    // setIsAuthenticated(false);
    setLoading(false);

  })
  .catch((error)=>{
    console.log(error.response.data.message);
    setUser({});
    setIsAuthenticatedReception(false);
    setLoading(false);
  })
/////////////////


// router.get("/patientHome",isAuthenticated,getProfile);
// router.get("/receptionHome",isAuthenticatedReception,getProfile);
// router.get("/doctorHome",isAuthenticatedDoctor,getProfile);
// router.get("/labHome",isAuthenticatedLab,getProfile);
// router.get("",isAuthenticatedMedical,getProfile);
// router.get("/apolloHome",isAuthenticatedApollo,getProfile);
// router.get("",isAuthenticatedNurse,getProfile);





// const [isAuthenticated , setIsAuthenticated] = useState(false);// this one is for patient
// const [isAuthenticatedDoctor , setIsAuthenticatedDoctor] = useState(false);
// const [isAuthenticatedReception , setIsAuthenticatedReception] = useState(false);
// const [isAuthenticatedNurse , setIsAuthenticatedNurse] = useState(false);
// const [isAuthenticatedMedical , setIsAuthenticatedMedical] = useState(false);
// const [isAuthenticatedLab , setIsAuthenticatedLab] = useState(false);
// const [isAuthenticatedApollo , setIsAuthenticatedApollo] = useState(false);
// /////

// ///
// router.post("/createAppointments",createAppointments);
// router.get("/getAppointmentsdoctor",getAppointmentsdoctor);


/////




}, [])
  

  
  

  return (
    

    // <Router>
    <>
    <Routes>
    
    <Route path="/" element= {<Home/>}/>;
    <Route path="/login" element= {<Login/>}/>;
    <Route path="/register" element= {<Register/>}/>;
    <Route path="/pastrecord" element= {<PastRecord/>}/>;
    <Route path="/patientHome" element= {<PatientHome/>}/>;
    <Route path="/profileDetail" element= {<ProfileDetail/>}/>;
    <Route path="/profile" element= {<Profile/>}/>;
    <Route path="/emailVerfication" element= {<EmailVerify/>}/>;

    <Route path="/doctorHome" element= {<DoctorHome/>}/>;
    <Route path="/doctorProfileDetail" element= {<DoctorProfile/>}/>;
    <Route path="/doctorlogin" element= {<Doctorlogin/>}/>;
       
    <Route path="/loginAs" element= {<LoginAs/>}/>;
    <Route path="/receptionHome" element= {<ReceptionHome/>}/>;
    <Route path="/receptionlogin" element= {<Receptionlogin/>}/>;

    <Route path="/nurselogin" element= {<Nurselogin/>}/>;
    <Route path="/nurseHome" element= {<NurseHome/>}/>;

    <Route path="/medicalPastrecord" element= {<MedicalPastRecord/>}/>;
    <Route path="/medicallogin" element= {<Medicallogin/>}/>;
    <Route path="/medicalHome" element= {<MedicalHome/>}/>;

    <Route path="/lablogin" element= {<Lablogin/>}/>;
    <Route path="/labHome" element= {<LabHome/>}/>;
    
    <Route path="/apolloPastrecord" element= {<ApolloPastRecord/>}/>;
    <Route path="/apolloHome" element= {<ApolloHome/>}/>;

    <Route path="/apollologin" element= {<Apollologin/>}/>;


    </Routes>
    <Toaster/>
    {/* </Router> */}
    {/* <NavLink to="/patientHome"> Home</NavLink>
      <NavLink to="/pastRecord"> Past_Record</NavLink>
      <NavLink to="/profile_detail">Profile</NavLink> */}
    </>
    
   
  );

}

export default App;
