const express = require("express");
const cors = require("cors")
require("dotenv").config();
const { connection } = require("./config/db");
const { vendorRoute } = require("./config/routes/vendorRoute")
const app = express();
app.use(express.json());
app.use(cors())
app.use("/vendor", vendorRoute);


app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("successfully connected to database");
    }
    catch (err) {
        console.log(err);
    }
    console.log(`Server is running on port ${process.env.PORT}`);
})