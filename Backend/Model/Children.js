const mongoose = require("mongoose");

const ChildrenSchema = new mongoose.Schema(
  
  { Name: String,
    Description: String,    
    Salary:String,
    parent:{
      type:mongoose.Schema.ObjectId,
      ref: "parent"
    },
    // grandchildren:[{
    //   type:mongoose.Schema.ObjectId,
    //   ref: "grandchildren"
    // }],
    
},
  { 
      timestamps: true
     },

);

module.exports = mongoose.model("children", ChildrenSchema);
