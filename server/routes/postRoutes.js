const router = require("express").Router();
const postCtrl = require("../controllers/postController");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");

router.post("/", auth, authAdmin, postCtrl.upload);

module.exports = router;
