global.config = require("./config");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("passport");
const { allUsers } = require("./public/database/usersData");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
mongoose
  .connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Database!"))
  .catch((err) => console.log("Could not Connected to Database!"));

app.use(cookieParser("saman secret"));
app.use(
  session({
    secret: "saman secret",
    resave: true,
    saveUninitialized: false,
    cookie: { expires: new Date(Date.now() + 1000 * 3600 * 24 * 365) },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

require("./passport/passport-local");
app.use(passport.initialize());
app.use(passport.session());

app.listen(config.port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${config.port}`);
});

app.use("/", require("./routes/index"));
