const pool = require("../config/dbconfig");


const getactiveRides = async (req, res) => {
    try {
        const [rides] = await pool.execute("SELECT * FROM rides WHERE `status` = ?", ["active"]);
        if (rides.length === 0) {
            return res.status(200).json({ message: "There are no active rides" });
        }
        return res.status(200).json(rides);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const getpastRides = async (req, res) => {
    try {
        const [rides] = await pool.execute("SELECT * FROM rides WHERE `status` = ? OR  `status` = ?",
            ["past", "cancelled"]);
        if (rides.length === 0) {
            return res.status(200).json({ message: "There are no active rides" });
        }
        return res.status(200).json(rides);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const createRide = async (req, res) => {
    try {
        const [rides] = await pool.execute("SELECT * FROM rides WHERE `status` = ?", ["active"]);
        if (rides.length === 0) {
        const { date, hours, cycle_id, status, rate } = req.body;
        // console.log(req.body);
        const [cycles] = await pool.execute("SELECT * FROM cycles WHERE `id` = ?",[cycle_id]);
        // console.log(cycles)
        const updateFields = [];
        const values = [];
        updateFields.push("`date`");
        values.push(date);
        updateFields.push("`hours`");
        values.push(hours);
        updateFields.push("`cycle_id`");
        values.push(cycle_id);
        updateFields.push("`image`");
        values.push(cycles[0].image);
        if (status) {
            updateFields.push("`status`");
            values.push(status);
        }

        updateFields.push("`rate`");
        values.push(rate);  
        const query = `INSERT INTO \`rides\`(${updateFields.join(
            ","
        )}) VALUES (?,?,?,?,?)`;
        const [result] = await pool.execute(query, values);
        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "ride created successfully" });
        } else {
            return res
                .status(500)
                .json({ message: "Failed to create ride entry" });
        }
    }
    else {
        return res.status(202)
                    .json({message: "Failed to create ride entry. A Ride is active"})

    }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


const cancelRide = async (req,res) =>{
    try {
        const { id } = req.params;
        const [existingUser] = await pool.execute(
            "SELECT * FROM `rides` WHERE `id`=?",
            [id]
        );
        if (existingUser.length === 0) {
            return res.status(404).json({ message: "ride not found" });
        }
        const [approvedUser] = await pool.execute(
            "UPDATE `rides` SET `status`=? WHERE `id`=?",
            ["cancelled",id]
        );
        return res.status(200).json({ message: "ride canceled" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { getactiveRides, createRide, getpastRides, cancelRide }