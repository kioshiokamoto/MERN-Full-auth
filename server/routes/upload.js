// require("dotenv").config();
const router = require("express").Router();
const uploadController = require("../controllers/uploadController");
const uploadImage = require("../middlewares/uploadImage");
const auth = require("../middlewares/auth");

router.post("/upload_avatar", uploadImage, auth, uploadController.uploadAvatar);
router.get("/", (req, res) => {
  res.send(`Working!... on PORT: ${process.env.PORT}`);
});

module.exports = router;
