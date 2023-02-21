const express = require("express");
const router = express.Router();
const GreetingsController = require("../controllers/greetingsController.js");

router.get(
  "/:name",
  GreetingsController.greetVisitor.bind(GreetingsController)
);

module.exports = router;
