global.config = require("./../config.js");
const express = require("express");
const router = express.Router();

router.use("/", require("./mainPage.js"));
router.use("/greetings", require("./greetings.js"));
router.use("/user", require("./user.js"));
router.use("/register", require("./register.js"));
router.use("/login", require("./login.js"));
router.use("/dashboard", require("./dashboard.js"));
router.use("/logout", require("./logout.js"));

router.all("*", async (req, res, next) => {
  try {
    const err = new Error("This page does not exists");
    err.status = 404;
    throw err;
  } catch (err) {
    next(err);
  }
  //   res.render("notFoundPage");
});

router.use((err, req, res, next) => {
  const code = err.status || 500;
  const message = err.message || "";
  const stack = err.stack || "";

  if (config.isDebugger) {
    return res.render("developerDebug", { message, code, stack });
  } else {
    return res.render(`${code}`, { message, code });
  }
});

module.exports = router;
