//contains logic for registrating/authenticating a user.

const User = require("../models/User"); //need to interact with user collection in DB
const bcrypt = require("bcryptjs");  //imports bcrypt lib

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;  //req.body: data sent by client
        const existingUser = await User.findOne({    //findOne: searches DB for 1 matching doc
            email
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
            name, email, password: hashedPassword
        });

        res.status(201).json({  //201: created
            message: "User registered successfully"
        });

    } catch (error) {
        res.status(500).json({  //500: internal server err
            message: error.message
        });
    }
};

module.exports = { registerUser };
