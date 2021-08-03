const Posts = require("../models/postModel");
const postCtrl = {
  upload: async (req, res) => {
    try {
      const { title, description, image } = req.body;
      let newPost;
      if (image) {
        newPost = new Posts({
          title,
          description,
          image,
        });
      } else {
        newPost = new Posts({
          title,
          description,
        });
      }
      await newPost.save();

      res.status(201).json({ msg: "Post creado correctamente", post: newPost });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const posts = await Posts.find();

      res.json({ msg: "Lista de posts", posts });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Posts.findOne({ _id: id });
      res.json({ msg: "Post unico", post });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { title, description, image } = req.body;
      const { id } = req.params;
      let update = {};
      if (title) {
        update.title = title;
      }
      if (description) {
        update.description = description;
      }
      if (image) {
        update.image = image;
      }
      await Posts.findByIdAndUpdate(
        { _id: id },
        {
          ...update,
        }
      );
      const post = await Posts.findById(id);

      res.json({ msg: "Se actualizo post correctamente", post });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Posts.findOneAndDelete({ _id: id });
      res.json({ msg: "Se eliminó post correctamente" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = postCtrl;
