const asyncHandler = require("express-async-handler");
const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// @des Register  new user
// @route Get/user/register
// @acess public 
const userRigerster = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400); 
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already redgisterd!");
    }
    //Hash password
    const HashPassword = await bcrypt.hash(password, 10);
    console.log("HashPassword:", HashPassword);
    const user = await User.create({
        username,
        email,
        password: HashPassword,
    });
    console.log(`user created ${user}`)
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email });
    }
    else {
        res.status(400);
        throw new Error("User data is not valid");
    }
    res.json({ message: "Register the user" });

});
// @des Register  new user
// @route Get/user/register
// @acess public 
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        req.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({ email });
    //compare password with hashpassword
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            },
           },
         process.env.access_token_secret,
         {expiresIn:"15m"}
        );
        res.status(200).json({ accessToken });
    }
    else{
        res.status(401);
        throw new Error("email or password are not valid");
    }
});
// @des Register  new user
// @route Get/user/register
// @acess public 
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { userRigerster, loginUser, currentUser };