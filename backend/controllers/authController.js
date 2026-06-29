//contains logic for registrating/authenticating a user.

const jwt = require("jsonwebtoken");
const User = require("../models/User"); //need to interact with user collection in DB
const bcrypt = require("bcryptjs");  //imports bcrypt lib

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;  //req.body: data sent by client
        const trimmedName = name.trim();
        const trimmedEmail = email.trim().toLowerCase();

        if (trimmedName.length < 3) {
            return res.status(400).json({
                message: "Name must contain at least 3 characters long."
            });
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        if (!emailRegex.test(trimmedEmail)) {
            return res.status(400).json({
                message: "Invalid Gmail address"
            });
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message:
                    "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
            });
        }

        const existingUser = await User.findOne({    //findOne: searches DB for 1 matching doc
            email: trimmedEmail
        });

        //Prevents duplicate registration
        if (existingUser) {
            return res.status(400).json({   //400: bad req
                message: "User already exists"
            });
        }

        //adds extra random data so that no 2 hash are same
        const hashedPassword = await bcrypt.hash(password, 10); //2^10 = 1024 iterations, more secure 

        //saves new user
        const user = await User.create({
            name: trimmedName, 
            email: trimmedEmail, 
            password: hashedPassword
        });

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(201).json({ token });

    } catch (error) {
        res.status(500).json({  //500: internal server err
            message: error.message
        });
    }
};

const loginUser = async (req, res) => {

    try {
        const { email, password} = req.body;
        const trimmedEmail = email.trim().toLowerCase();

        const user = await User.findOne({
            email: trimmedEmail
        });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = { registerUser, loginUser };
