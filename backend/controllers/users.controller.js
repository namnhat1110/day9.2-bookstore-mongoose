const User = require("../models/user");

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = new User({ name, email, password });

        await user.save();

        res.status(201).json({
            success: true,

            data: user,

            message: `User ${user.name} created!`,


        });
    } catch (err) {
        res.status(400).json({
            success: false,

            error: err.message,
        });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});

        res.status(200).json({
            success: true,

            data: users,

            message: `${users.length} users found!`,
        });
    } catch (err) {
        res.status(400).json({
            success: false,

            error: err.message,
        });
    }
};

module.exports = {
    createUser,
    getUsers,

};