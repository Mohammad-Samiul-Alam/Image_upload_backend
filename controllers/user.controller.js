import User from "../models/user.model.js";


export const createUser = async(req, res) => {
    const {name, email, age} = req.body;
    const {filename} = req.file;

    try {
        if(name && email && age && filename) {
            const newUser = new User({
                name,
                email,
                age,
                image: filename,
            })

            const new_user = await newUser.save();
            if(new_user) {
                res.status(200).json(newUser);
            } else{
                res.status(400).json({message: "something is wrong"});
            }
        } else {
            res.status(400).json({message: "all fields are required"});
        }
        
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getAllUser = async(req, res) => {
    try {
        const allUsers = await User.find({});

        if(allUsers) {
            res.status(200).json(allUsers);
        }
    } catch (error) {
        res.status(404).json(error);
    }
}