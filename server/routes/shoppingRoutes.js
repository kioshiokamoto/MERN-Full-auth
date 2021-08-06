const router = require("express").Router();
const shoppingCtrl = require("../controllers/shoppingController");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");

router.post("/", shoppingCtrl.addToCar);

router.get("/:usuario", shoppingCtrl.getCartItems);

router.post("/buy", shoppingCtrl.buyArticles);

router.get("/buy/:usuario", shoppingCtrl.getPurchasedArticles);

module.exports = router;
