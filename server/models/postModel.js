const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "Por favor ingresa un nombre"],
    },
    categoria: {
      type: String,
      required: [true, "Por favor ingresa una categoria"],
    },
    marca: {
      type: String,
      required: [true, "Por favor ingresa una marca"],
    },
    precio: {
      type: Number,
      required: [true, "Por favor ingresa un precio"],
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/720x480?text=Post",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Posts", PostSchema);

module.exports = Post;
