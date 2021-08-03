const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Por favor ingresa un titulo"],
    },
    description: {
      type: String,
      required: [true, "Por favor ingresa una descripcion"],
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
