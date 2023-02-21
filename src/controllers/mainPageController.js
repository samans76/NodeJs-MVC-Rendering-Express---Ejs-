const Controller = require("./controller.js");

class MainPageController extends Controller {
  createMainPage(req, res, next) {
    res.render("mainPage", { isLoggedIn: req.isAuthenticated() });
  }

  registerBtn(req, res, next) {
    res.redirect("/register");
  }
  loginBtn(req, res, next) {
    res.redirect("/login");
  }
  usersBtn(req, res, next) {
    res.redirect("/user");
  }
  dashboardBtn(req, res, next) {
    res.redirect("/dashboard");
  }
}

module.exports = new MainPageController();
