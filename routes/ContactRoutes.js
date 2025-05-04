const express=require("express");
const router =express.Router();
const {getContact,createContacts,deleteContact,updateContact,getContacts}=require("../controllers/contactController");
const validateToken = require("../middleware/ValidateTokenHandler");

router.use(validateToken);
router.route("/").get(getContact).post(createContacts);
router.route("/:id").get(getContacts).put(updateContact).delete(deleteContact);

module.exports=router;