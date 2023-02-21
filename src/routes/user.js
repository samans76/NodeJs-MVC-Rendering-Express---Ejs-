const usersData = require("../public/database/usersData.js");
const express = require("express");
const router = express.Router();
const User = require("./../models/userSchema.js");
const UserController = require("./../controllers/userController.js");

router.get("/", UserController.showAllUsers.bind(UserController));
router.post("/", UserController.addUser.bind(UserController));

router.get("/:id", UserController.findUser.bind(UserController));

router.post(
  "/:id/updateButton",
  UserController.updateUserButton.bind(UserController)
);
router.get("/:id/updateForm", UserController.updateForm.bind(UserController));
router.post("/:id/update", UserController.updateUserData.bind(UserController));

router.post("/:id/remove", UserController.removeUser.bind(UserController));

module.exports = router;

/// version without mongoDB     *if you have problem with mongoDB replace this code with the above

// const usersData = require("../public/database/usersData.js");
// const express = require("express");
// const router = express.Router();
// const User = require("./../models/userSchema.js");

// router.get("/", function (req, res) {
//   res.render("userTable", {
//     users: JSON.stringify(usersData),
//     messages: JSON.stringify([]),
//   });
// });

// router.post("/", function (req, res) {
//   if (req.body.id === "") return;
//   console.table(req.body);
//   usersData.push({
//     id: parseInt(req.body.id),
//     age: parseInt(req.body.age),
//     name: req.body.name,
//   });

//   // res.redirect("/user");
//   res.render("userTable", {
//     users: JSON.stringify(usersData),
//     messages: JSON.stringify(["New user data added successfully"]),
//   });
// });

// router.get("/:id", function (req, res) {
//   const user = usersData.find((_) => _.id === parseInt(req.params.id));
//   res.render("userTable", {
//     users: JSON.stringify([user]),
//     messages: JSON.stringify([]),
//   });
// });

// router.post("/:id/updateButton", function (req, res) {
//   const user = usersData.find((_) => _.id === parseInt(req.params.id));
//   res.render("userUpdateForm", { users: user });
// });

// router.get("/:id/updateForm", function (req, res) {
//   const user = usersData.find((_) => _.id === parseInt(req.params.id));
//   res.render("userUpdateForm", { users: user });
// });

// router.post("/:id/update", function (req, res) {
//   console.log(req.body);
//   for (const user of usersData) {
//     if (user.id === parseInt(req.params.id)) {
//       user.id = parseInt(req.body.id);
//       user.name = req.body.name;
//       user.age = parseInt(req.body.age);
//     }
//   }
//   res.redirect("/user");
// });

// router.post("/:id/remove", function (req, res) {
//   for (const [i, user] of usersData.entries()) {
//     if (user.id === parseInt(req.params.id)) {
//       usersData.splice(i, 1);
//     }
//   }
//   res.redirect("/user");
// });

// module.exports = router;
