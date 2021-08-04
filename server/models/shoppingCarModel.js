const mongoose = require("mongoose");

const ShoppingCarSchema = new mongoose.Schema(
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
        cantidad: {
          type: Number,
          required: [true, "Por favor ingresa cantidad de producto"],
        },
      },
    ],
    monto_total: {
      type: Number,
      required: [true, "Por favor ingresa monto total"],
    },
  },
  {
    timestamps: true,
  }
);

const ShoppingCar = mongoose.model("shoppingCar", ShoppingCarSchema);

module.exports = ShoppingCar;
