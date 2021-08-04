const router = require("express").Router();
const postCtrl = require("../controllers/postController");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");

// router.post("/", auth, authAdmin, postCtrl.upload);
router.post("/", postCtrl.upload);

router.get("/all", postCtrl.getAll);

router.get("/:id", postCtrl.getSingle);

// router.patch("/:id", auth, authAdmin, postCtrl.updatePost);
router.patch("/:id", postCtrl.updatePost);

// router.delete("/:id", auth, authAdmin, postCtrl.deletePost);
router.delete("/:id", postCtrl.deletePost);

module.exports = router;
