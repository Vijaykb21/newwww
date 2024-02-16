import mongoose from "mongoose";
const imageSchema = new mongoose.Schema({  
    imglink: String,
    pfnumber: String,
    createdAt: {
        type: Date,
        default : Date.now(),
    },


}); 

export const Record = mongoose.model("Record", imageSchema);