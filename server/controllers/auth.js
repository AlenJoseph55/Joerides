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
        return res.status(201).json({ message: "SignUp successful" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const [users] = await pool.execute(
            "SELECT * FROM `users` WHERE `email` = ?",
            [email]
        );

        if (users.length > 0) {
            const user = users[0];
            // Perform password comparison (after hashing)
            if (user.password === password) {
                // User authentication successful
                if (user.role === "user") {
                    // Redirect user based on their role
                    res.status(200).json({ message: "Login successful", redirect: '/', role: 'user', email:user.email, name:user.name, number:user.id });
                } else if(user.role === "admin") {
                    res.status(200).json({ message: "Admin Login successful", redirect: '/admin/requests', role: 'admin' });
                }
            } else {
                // Incorrect password
                res.status(400).json({ message: "Invalid email or password" });
            }
        } else {
            // User not found
            res.status(400).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        // Internal server error
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


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

const getUsers = async (req, res) => {
    try {
        const [users] = await pool.execute(
            "SELECT * FROM `users` WHERE `status`='approve'"
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

const reject = async (req, res) => {
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
            "DELETE FROM `users` WHERE `id`=?",
            [id]
        );
        return res.status(200).json({ message: "User Rejected" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}






module.exports = { signup, approve, getRequests, reject,getUsers, signin} ;