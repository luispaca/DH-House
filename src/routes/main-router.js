const { Router } = require("express");
const mainController = require("../controllers/main-controller");
const router = Router();

router.get("/",mainController.home);
router.get("/:id",mainController.detail);

module.exports = router;