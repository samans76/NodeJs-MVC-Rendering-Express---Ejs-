const express = require("express");
const router = express.Router();
const RegisterController = require("./../controllers/registerController");

router.use((req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
});

router.get("/", RegisterController.registerForm.bind(RegisterController));
router.post("/", RegisterController.register.bind(RegisterController));

module.exports = router;
