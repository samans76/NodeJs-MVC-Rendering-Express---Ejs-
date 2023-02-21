const Controller = require("./controller.js");

class DashboardController extends Controller {
  createDashboard(req, res, next) {
    res.render("dashboard", {
      name: JSON.stringify(req.user.name),
    });
  }

  goToMainPage(req, res, next) {
    res.redirect("/");
  }

  logout(req, res, next) {
    // change global login to notLoggedIn
    req.logout({}, (err) => {
      res.redirect("/");
    });
  }
}

module.exports = new DashboardController();
