import { User } from "../models/Patient.js";
import jwt from "jsonwebtoken";
// import nodemailer
import { Doctor } from "../models/doctor.js";
import { Appointments } from "../models/appointments.js";


export const createAppointments = async(req,res)=>{
    const {pfnumber,doctorname} = req.body ;
    const patient =  await User.findOne({pfnumber});
    if(!patient){
      return res.status(400).json({
      success:false,
      message: "Patient not registered",
    })
    }



    const {firstname, lastname} = patient ;
    const appointment =  await Appointments.create({
        firstname,
        lastname,
        pfnumber,
        doctorname,
    })

   if(appointment){
    res.status(200).json({
        success:true,
        message: "Appointment created",
    })
   }
   else{
    res.status(401).json({
        success:false,
        message: "Appointment not created",
    })
   } 
}; 



export const getAppointmentsdoctor = async(req,res) =>{
const {token} = req.cookies;
// console.log(req.headers.cookies);
if(!token) return res.status(401).json({
  success: false,
  message: "Login first",
});

const decoded = jwt.verify(token, process.env.JWT_SECRET);

const {firstname} = await Doctor.findById(decoded._id);
const appointments  = await Appointments.find({doctorname:firstname});

res.status(200).json({
success: true,
message:"send succefully",
appointments,
});


}
