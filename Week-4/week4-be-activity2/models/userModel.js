const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        address: { type: String, required: true },
        age: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);