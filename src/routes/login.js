const express = require("express");
const router = express.Router();
const LoginController = require("./../controllers/loginController");

router.use((req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
});

router.get("/", LoginController.loginForm.bind(LoginController));
router.post("/", LoginController.login.bind(LoginController));

module.exports = router;
