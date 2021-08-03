const Posts = require("../models/postModel");
const postCtrl = {
  upload: async (req, res) => {
    try {
      res.json({ msg: "Post creado" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = postCtrl;
