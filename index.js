const express=require("express");
const errorHandler=require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv=require("dotenv").config();

connectDb();
const app=express()

const port =process.env.PORT || 8000
app.use(express.json())
app.use("/api/contacts",require("./routes/ContactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
});