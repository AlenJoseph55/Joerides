const pool = require("../config/dbconfig");
const getImageUrl = require("../config/imageLoc");

const getCycles = async (req, res) => {
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
        rate
    } = req.body;
    const image = req.file;
    try {
        if (!image) {
            return res.status(400).json({ message: "image is required" });
          }
        console.log(req.body);
        const updateFields = [];
        const values = [];
        updateFields.push("`name`");
        values.push(name);
        // if(image){
            updateFields.push("`image`");
            const img_name = image.filename;
            const img_loc = getImageUrl(req, img_name);
            values.push(img_loc);
        // }
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

module.exports = { getCycles, createCycles, deleteCycle };