const express= require("express")
const router=express.Router();
const useresquema=require("../models/user");
// user = require("../models/user");


//crear usuario/
router.post("/users" ,(req,res)=>
{ 
      const user= useresquema(req.body);  
   user.save()
.then((data) => res.json(data))
.catch((error)=>res.json({mensaje: error}))
} );
//obtener todos los usuarios

router.get("/users" ,(req,res)=>
{ 
      useresquema  
   .find()
.then((data) => res.json(data))
.catch((error)=>res.json({mensaje: error}))
} );
//un solo usuario
router.get("/users/:id" ,(req,res)=>
{ 
     const { id }=req.params;
      useresquema  
  .findById(id)
.then((data) => res.json(data))
.catch((error)=>res.json({mensaje: error}))
} );
module.exports=router;

// actualizar usuario
router.put("/users/:id" ,(req,res)=>
{ 
     const { id }=req.params;
     const { nombre, edad, email}=req.body;
      useresquema  
.updateOne({_id:id}, {$set: {nombre, edad, email}})
.then((data) => res.json(data))
.catch((error)=>res.json({mensaje: error}))
} );
//elinar usuario
router.delete("/users/:id" ,(req,res)=>
{ 
     const { id }=req.params;
     
      useresquema  
     .deleteOne({_id:id})
     .then((data) => res.json(data))
     .catch((error)=>res.json({mensaje: error}))
} );
