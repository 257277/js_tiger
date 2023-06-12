const express = require("express");

const { VendorModel } = require("../Model/vendorModel");

const vendorRoute = express.Router();


vendorRoute.get("/allvendor/:page", async (req, res) => {
    let page = req.params.page;
    try {
        let data = await VendorModel.find();
        res.send(data);
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