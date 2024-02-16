import bcrypt from "bcrypt";
import { send_cookies } from "../utils/features.js";
import { Doctor } from "../models/doctor.js";




export const doctorreg  = async(req, res)=>{
    const { firstname, lastname, email, password } = req.body; // distructering values from an object
    let doc = await Doctor.findOne({ email });
  
  
    if (doc){ 
        return res.status(404).json({
        success: false,
        message: "Doctor Already Exist",
      });
    
    }
     
  
    const hashedpassword = await bcrypt.hash(password, 10);
  
    doc = await Doctor.create({
      firstname,
      lastname,
      email,
      password: hashedpassword,
    });
  
    send_cookies(doc, res, "Registered Succesfully", 201);
       
}


export const doclogin = async (req, res) => {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });
    
    if (!doctor)
      return res.status(404).json({
        success: false,
        message: "Doctor dosen't Exist",
      });
  
    const isMatch = await bcrypt.compare(password, doctor.password);
  
    if (!isMatch)
      return res.status(404).json({
        success: false,
        message: "Invalid Password",
      });
  
    send_cookies(doctor, res, `Welcome back ${doctor.firstname}`, 200);
  };

  