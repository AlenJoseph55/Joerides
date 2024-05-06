const pool = require("../config/dbconfig");

const getCycles = async(req,res)=>{
    try {
        const [cycles] = await pool.execute("SELECT * FROM cycles");
        if (cycles.length === 0) {
          return res.status(200).json({ message: "There are no cycles" });
        }
        return res.status(200).json(cycles);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
}

const createCycles = async (req, res) => {
    const {
        name,
        image,
        rate
    } = req.body;
    try {
        const updateFields = [];
        const values = [];
        updateFields.push("`name`");
        values.push(name);
        updateFields.push("`image`");
        values.push(image);
        updateFields.push("`rate`");
        values.push(rate);
        const query = `INSERT INTO \`cycles\`(${updateFields.join(
            ","
        )}) VALUES (?,?,?)`;
        const [result] = await pool.execute(query, values);
        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "cycle created successfully" });
        } else {
            return res
                .status(500)
                .json({ message: "Failed to create cycle entry" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const deleteCycle = async (req, res) => {
    try {
        const [cycles] = await pool.execute(
            "DELETE from `cycles` WHERE `id` = ?",
            [req.params.id]
        );
        if (cycles.affectedRows > 0) {
            return res.status(200).json({ message: "cycle deleted successfully" });
        } else {
            return res.status(404).json({ message: "cycle not found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server Error" });
    }
};

module.exports = getCycles,createCycles,deleteCycle;