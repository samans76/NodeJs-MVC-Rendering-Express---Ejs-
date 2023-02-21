const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/userSchema.js");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  let user = await User.findOne({ id: id });
  if (user) done(null, user);
});

// in strategy bara register call mishe
passport.use(
  "local.register",
  new localStrategy(
    {
      passReqToCallback: true,
    },
    async (req, done) => {
      try {
        let user = await User.find({ name: req.body.name });
        if (user) {
          return done(null, false, { messages: "user already exists" });
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
        done(null, newUser);
      } catch (error) {
        return done(error, false, {
          messages: "there was a error so register was not successful",
        });
      }
    }
  )
);

// in strategy bara login call mishe
passport.use(
  "local.login",
  new localStrategy(
    {
      usernameField: "name",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, name, password, done) => {
      try {
        let user = await User.findOne({ name: req.body.name });
        if (!user || user.password !== req.body.password) {
          return done(null, false, { messages: "name or password are wrong" });
        }
        done(null, user);
      } catch (error) {
        return done(error, false, {
          messages: "there was a error so login was not successful",
        });
      }
    }
  )
);
