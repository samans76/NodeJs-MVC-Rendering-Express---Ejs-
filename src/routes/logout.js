const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // put global isLogin to false
  req.logout({}, (err) => {
    res.redirect("/mainPage");
  });

  // req.logIn(user, (err) => {
  //   return res.redirect("/dashboard");
  // });
});

module.exports = router;
