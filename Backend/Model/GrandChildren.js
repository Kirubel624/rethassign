const mongoose = require("mongoose");

const ChildrenSchema = new mongoose.Schema(
  
  { Name: String,
    Description: String,    
    Salary:String,
    parent:{
      type:mongoose.Schema.ObjectId,
      ref: "parent"
    },
    
},
  { 
      timestamps: true
     },

);

module.exports = mongoose.model("children", ChildrenSchema);
