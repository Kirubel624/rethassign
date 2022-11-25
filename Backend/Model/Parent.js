const mongoose = require("mongoose");

const ParentSchema = new mongoose.Schema(
  
  {  Name: String,
    Description: String,    
    Salary:String,
   children:[
    
    {
      type:mongoose.Schema.ObjectId,
      ref:'children'
  }

   ],
   
},
 
  { 
      timestamps: true
     },

);

module.exports = mongoose.model("parent", ParentSchema);
