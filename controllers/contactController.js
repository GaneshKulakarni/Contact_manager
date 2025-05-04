const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModels");
// @des Get all contacts
// @route Ge/t /spi/contacts
// @acess private 
const getContacts= asyncHandler(async(req,res)=>{
    const contacts= await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts)
});
// @des create all contacts
// @route Get /spi/contacts
// @acess private 
const createContacts=asyncHandler(async (req,res)=>{
    console.log("the request body is : ",req.body);
    const {name,email,phone}=req.body;
    if(!name || !phone ||!email){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const contact=await Contact.create({
       name,
       phone,
       email,
       user_id:req.user.id,
    });
    res.status(201).json(contact);
});
// @des get all contacts
// @route Get /spi/contacts/:id
// @acess private 
const getContact= asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({message:`get contacts for ${req.params.id}`})
});
// @des update all contacts
// @route Get /spi/contacts/:id
// @acess private 
const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString()!== req.user.id){
        res.status(403);
        throw new Error("User  don't have permission to access others contacts");
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);
});
// @des delete all contacts
// @route Get /spi/contacts/:id
// @acess private 
const deleteContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString()!== req.user.id){
        res.status(403);
        throw new Error("User  don't have permission to access others contacts");
    }
    await Contact.deleteOne({_id:req.params.id});
    res.status(200).json(contact);
});

module.exports={getContacts,createContacts,deleteContact,updateContact,getContact};
