const Controller = require("./controller.js");

class GreetingsController extends Controller {
  greetVisitor(req, res) {
    res.send(`Hello ${req.params.name}!`);
  }
}

module.exports = new GreetingsController();
