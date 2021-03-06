const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        // required: true
    },
    hoverImg: {
        type: String,
    },
    categories: {
        type: Array,
    },
    size: {
        type: Array,
    },
    color: {
        type: Array,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
    stockQuantity: {
        type: Number,
        required: true,
        default: 1,
    },
    costPrice: {
        type: Number,
        required: true,
    }

}, {timestamps: true})

module.exports = mongoose.model("Product", ProductSchema);