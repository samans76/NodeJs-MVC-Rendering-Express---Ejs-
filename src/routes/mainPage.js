const express = require("express");
const router = express.Router();
const MainPageController = require("./../controllers/mainPageController");

router.get("/", MainPageController.createMainPage.bind(MainPageController));
router.post("/usersBtn", MainPageController.usersBtn.bind(MainPageController));
router.post(
  "/registerBtn",
  MainPageController.registerBtn.bind(MainPageController)
);
router.post("/loginBtn", MainPageController.loginBtn.bind(MainPageController));
router.post(
  "/dashboardBtn",
  MainPageController.dashboardBtn.bind(MainPageController)
);

module.exports = router;
