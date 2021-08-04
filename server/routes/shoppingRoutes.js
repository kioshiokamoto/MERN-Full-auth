const router = require("express").Router();
const shoppingCtrl = require("../controllers/shoppingController");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");

router.post("/", auth, shoppingCtrl.addToCar);

router.get("/:usuario", auth, shoppingCtrl.getCartItems);

router.post("/buy", auth, shoppingCtrl.buyArticles);

router.get("/buy/:usuario", auth, shoppingCtrl.getPurchasedArticles);

module.exports = router;
