import User from "../model/User.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) return res.status(204).json({ 'message': 'No users found.'});
        res.json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        //todo
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });    
    }
}