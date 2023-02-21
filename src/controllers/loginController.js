const passport = require("passport");
const Controller = require("./controller.js");
const User = require("./../models/userSchema.js");

class LoginController extends Controller {
  loginForm(req, res, next) {
    res.render("loginForm", {
      messages: JSON.stringify([]),
      messageType: JSON.stringify("success"),
    });
  }

  async login(req, res, next) {
    // const user = await User.findOne({
    //   name: req.body.name,
    //   password: req.body.password,
    // });
    // if (user) {

    // change global loginStatus to true
    passport.authenticate("local.login", (err, user) => {
      if (!user) {
        res.render("loginForm", {
          messages: JSON.stringify(["username or password is incorrect"]),
          messageType: JSON.stringify("fail"),
        });
        return;
      }

      req.logIn(user, (err) => {
        return res.redirect("/dashboard");
      });
      console.log(req.isAuthenticated());
    })(req, res, next);
    // }
  }
}

module.exports = new LoginController();
