const express = require("express");

const { VendorModel } = require("../Model/vendorModel");

const vendorRoute = express.Router();

vendorRoute.get("/allvendor", async (req, res) => {
    try {
        let data = await VendorModel.find();
        res.send({ "data": data });
    }
    catch (err) {
        res.send(err);
    }
})

vendorRoute.get("/allvendor/:page", async (req, res) => {
    try {
        // let totaldata = await VendorModel.find();
        // res.send(data);
        let page = Number(req.params.page);
        let limit = 2;
        const data = await VendorModel.find().skip(page * limit).limit(limit);
        res.send({ "data": data });
    }
    catch (err) {
        res.send(err);
    }
})

vendorRoute.post("/postvendor", async (req, res) => {

    try {
        await VendorModel.insertMany(req.body);
        res.send("Vendor is added successfully");
    }
    catch (err) {
        res.send(err);
    }
})

vendorRoute.patch("/editvendor/:id", async (req, res) => {
    let id = req.params.id;
    try {
        await VendorModel.findByIdAndUpdate({ "_id": id }, req.body);
        res.send("Details updated successfully");
    }
    catch (err) {
        res.send(err);
    }
})

vendorRoute.delete("/deletevendor/:id", async (req, res) => {
    let id = req.params.id;
    try {
        await VendorModel.findByIdAndDelete({ "_id": id });
        res.send("Vendor is deleted successfully");
    }
    catch (err) {
        res.send(err);
    }
})


module.exports = {
    vendorRoute
}