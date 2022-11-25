const Parent = require("../Model/Parent")
const Children = require("../Model/Children");
const catchAsync = require("../Utils/catchAsync");
exports.createParent=catchAsync(async (req, res) => {

    console.log('dawdawdawd')
    console.log(req.body);
  
    // console.log('abcde')
    const parent = await Parent.create(req.body);
  
    res.status(200).json({
      status: "success",
      data: parent,
    });
  });
  exports.createChildren=catchAsync(async (req, res) => {
    req.body.parent= req.params.id;
  
    // console.log('dawdawdawd')
    // console.log(req.body);
  
    // console.log('abcde')
    const newChildren = await Children.create(req.body);
    // const parent = await Parent.findById(id)
    // newChildren.parent=parent;
    // await newChildren.save()
    // parent.children.push(newChildren)
    // await parent.save()
    // console.log(newChildren)
    res.status(200).json({
      status: "success",
      data: newChildren,
    });
  });
  exports.editParent=catchAsync(async (req,res)=>{
    const id = req.params.id;
    const newParent = req.body;
    console.log(id)
    data = {
    Name:newParent.Name,
    Description:newParent.Description,
    Salary:newParent.Salary,
    Report:newParent.Report
    }
    await Parent.findOneAndUpdate(id, data, {useFindAndModify:false})
    return res.json({msg:data ,status:200});  
  });

  exports.updateChildren=catchAsync(async (req, res) => {
const Gchild=await Children.findByIdAndUpdate({_id:req.params.id},req.body,{
  new:true,
  runValidators:true,

})
    // console.log(newChildren)
    res.status(200).json({
      status: "success",
      data: Gchild,
    });
  });

  exports.getChildren= catchAsync(async(req,res)=>{
    const id=req.params.id
    const parent=await Parent.findById({_id: req.params.id})
    // .populate('children')
    res.status(200).json({
      status: "success",
      data: parent.children
    })
  })
  exports.getParent= catchAsync(async(req,res)=>{
    const id = req.params.id
    const children= await Children.findById(id).populate('parent')
    res.status(200).json({
      status: "success",
      data: children.parent
    })
  })
  exports.getGrandChildren= catchAsync(async(req,res)=>{
    const id = req.params.id
    const children= await Children.findById(id).populate('children')
    res.status(200).json({
      status: "success",
      data: children.parent
    })
  })