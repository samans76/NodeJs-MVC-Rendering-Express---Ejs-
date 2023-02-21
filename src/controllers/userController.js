const Controller = require("./controller.js");
const User = require("./../models/userSchema.js");

class UserController extends Controller {
  async showAllUsers(req, res) {
    let usersList = await User.find({});
    if (usersList.length === 0) {
      const newUser1 = new User({ id: 1, name: "saman", password: "1457s" });
      const newUser2 = new User({ id: 2, name: "ali", password: "47852" });
      const newUser3 = new User({ id: 3, name: "sara", password: "121212" });
      const newUser4 = new User({ id: 4, name: "hosein", password: "123z123" });
      const newUser5 = new User({ id: 5, name: "zahra", password: "a14789" });
      await newUser1.save();
      await newUser2.save();
      await newUser3.save();
      await newUser4.save();
      await newUser5.save();
    }
    usersList = await User.find({});

    console.log(req.user);
    console.log(req.isAuthenticated());
    res.render("userTable", {
      users: JSON.stringify(usersList),
      messages: JSON.stringify([]),
      messageType: JSON.stringify("success"),
    });
  }

  async addUser(req, res, next) {
    try {
      if (req.body.id === "") return;
      if (isNaN(req.body.id)) {
        // if (req.body.id === "14") {
        this.error("Id should be a number.", 500);
      }

      let newUser = new User({
        id: parseInt(req.body.id),
        name: req.body.name,
        password: req.body.password,
      });
      await newUser.save();

      const usersList = await User.find({});
      res.render("userTable", {
        users: JSON.stringify(usersList),
        messages: JSON.stringify(["New user data added successfully"]),
        messageType: JSON.stringify("success"),
      });
    } catch (err) {
      next(err);
    }
  }

  async findUser(req, res, next) {
    try {
      const user = await User.findOne({ id: req.params.id });
      if (user !== null) {
        res.render("userTable", {
          users: JSON.stringify([user]),
          messages: JSON.stringify([]),
          messageType: JSON.stringify("success"),
        });
      } else {
        this.error("User was not found.", 500);
      }
    } catch (err) {
      next(err);
    }
  }

  async updateUserButton(req, res) {
    const user = await User.findOne({ id: req.params.id });
    res.render("userUpdateForm", { users: user });
  }
  async updateForm(req, res) {
    const user = await User.findOne({ id: req.params.id });
    res.render("userUpdateForm", { users: user });
  }
  async updateUserData(req, res) {
    const usersList = await User.find({});
    for (const user of usersList) {
      if (user.id === parseInt(req.params.id)) {
        await User.updateMany({ id: req.params.id }, { $set: req.body });
      }
    }
    res.redirect("/user");
  }

  async removeUser(req, res) {
    const usersList = await User.find({});
    for (const [i, user] of usersList.entries()) {
      if (user.id === parseInt(req.params.id)) {
        await User.deleteOne({ id: req.params.id });
      }
    }
    res.redirect("/user");
  }
}

module.exports = new UserController();
