const express = require('express');
const port = process.env.PORT || 3001;
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 204,
  };
app.use(cors(corsOptions));
app.use('/', express.static("./assets/images"));
app.use("/api/v1/cycles", require("./routes/cycleroutes"));
app.use("/api/v1", require("./routes/authroutes"));
app.use("/api/v1/rides", require("./routes/rideroutes"));


app.listen(port, () => { console.log(`server is running on port ${port}`); });
