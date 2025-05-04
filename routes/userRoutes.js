const express=require( "express")
const router=express.Router();
const {userRigerster,loginUser,currentUser}=require("../controllers/userController");
const   validateToken=require("../middleware/ValidateTokenHandler")

router.post("/register",userRigerster);
router.post("/login",loginUser);
router.get("/current",validateToken,currentUser);
module.exports=router;