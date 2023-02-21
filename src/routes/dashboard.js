const express = require("express");
const router = express.Router();
const DashboardController = require("./../controllers/dashboardController");

router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
});

router.get("/", DashboardController.createDashboard.bind(DashboardController));
router.post(
  "/goHome",
  DashboardController.goToMainPage.bind(DashboardController)
);
router.post("/logout", DashboardController.logout.bind(DashboardController));

module.exports = router;
