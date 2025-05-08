const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    nama_daerah: {
      type: String,
      required: [true, "Please enter city name!"],
    },

    image: {
      type: String,
      required: false,
    },

    wisata: {
      type: Object,
      required: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
