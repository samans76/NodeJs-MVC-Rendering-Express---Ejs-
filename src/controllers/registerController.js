const Controller = require("./controller.js");
const User = require("./../models/userSchema.js");
const passport = require("passport");

class RegisterController extends Controller {
  async registerForm(req, res, next) {
    res.render("registerForm", {
      messages: JSON.stringify([]),
      messageType: JSON.stringify("success"),
    });
  }

  async register(req, res, next) {
    console.log(req.body);
    if (req.body.password !== req.body.passwordConfirm) {
      res.render("registerForm", {
        messages: JSON.stringify(["passwords are not the same"]),
        messageType: JSON.stringify("fail"),
      });
      return;
    }
    const usersList = await User.find({});
    const usersIds = usersList.map((u) => u.id);
    let freeId = 0;
    console.log(typeof usersIds[0]);
    while (freeId < 10000) {
      freeId++;
      if (!usersIds.includes(freeId)) {
        break;
      }
    }

    const newUser = new User({
      id: freeId,
      name: req.body.name,
      password: req.body.password,
    });
    await newUser.save();
    res.redirect("/login");
    // res.render("loginForm", {
    //   messages: JSON.stringify([
    //     "You have successfully registered. now you can login",
    //   ]),
    //   messageType: JSON.stringify("success"),
    // });
  }
}

module.exports = new RegisterController();
