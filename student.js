import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
studentName:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true

},
phone:{
  type:String,
  required:true,
  minlenagth:10,
  maxlength:10,


},
branch:{
type:String,
required:true,
enum:["cse","csm","civil","cse-ai"]

},
cgpa:{
    type:Number,
    required:true,
    mincgpa:0,
    maxcgpa:10
}


},

{
    timestamps:true
}

);

const Student=mongoose.model(
    "Student",
    studentSchema
);
export default Student;