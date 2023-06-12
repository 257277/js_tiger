const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema({
    vendor_name: {
        type: String,
        require: true
    },
    bank_account_no: {
        type: Number,
        require: true
    },
    bank_name: {
        type: String,
        require: true
    },
    address_line1: {
        type: String,
        require: true
    },
    address_line2: {
        type: String
    },
    city: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    zip_code: {
        type: Number,
        require: true
    }
})

const VendorModel = mongoose.model("Vendor", vendorSchema);

module.exports = {
    VendorModel
}