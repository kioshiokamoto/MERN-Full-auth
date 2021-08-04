const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: [true, "Por favor ingresa id de usuario"],
    },
    productos: [
      {
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Posts",
          required: [true, "Por favor ingresa id de producto(posts)"],
        },
        precio: {
          type: Number,
          required: [true, "Por favor ingresa precio de producto"],
        },
        cantidad: {
          type: Number,
          required: [true, "Por favor ingresa cantidad de producto"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model("shop", ShopSchema);

module.exports = Shop;
