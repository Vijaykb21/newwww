import mongoose from "mongoose";

const schema = new mongoose.Schema({
    pfnumber:{
      type: String,
      required: true,
    },
    firstname:String,
    lastname:String,
    doctorname: {
        type: String,
        required: true,
    },
    reg_no:{
    type: String,
    default: "1234",
    },
    
    createdAt: {
        type: Date,
        default : Date.now(),
    },
});
 




export const Appointments = mongoose.model("appointments" , schema );
