const pool = require("../config/dbconfig");

const signup = async (req, res) => {
    try {
        const { name, email } = req.body;
        const [existingUser] = await pool.execute(
            "SELECT * FROM `users` WHERE `email`=?",
            [email]
        );
        if (existingUser.length > 0) {
            return res.status(409).json({ message: "User already exists" });
        }
        const newUser = await pool.execute(
            "INSERT INTO `users`(`name`, `email`) VALUES (?,?)",
            [name, email]
        );
        return res.status(201).json({ message: "User created" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const getRequests = async (req, res) => {
    try {
        const [users] = await pool.execute(
            "SELECT * FROM `users` WHERE `status`='pending'"
        );
        return res.status(200).json({ users });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}

const approve = async (req, res) => {
    try {
        const { id } = req.params;
        const [existingUser] = await pool.execute(
            "SELECT * FROM `users` WHERE `id`=?",
            [id]
        );
        if (existingUser.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        const [approvedUser] = await pool.execute(
            "UPDATE `users` SET `status`=? WHERE `id`=?",
            ["approve",id]
        );
        return res.status(200).json({ message: "User approved" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}



module.exports = { signup, approve, getRequests} ;