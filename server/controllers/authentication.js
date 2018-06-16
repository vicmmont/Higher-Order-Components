const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../config");

function tokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret);
}

exports.signUp = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(422).send({ error: "You must provide an email and a password" });
  }

  User.findOne({ email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      res.status(422).send({ error: "Email is in use" });
    }

    const user = new User({
      email,
      password
    });

    user.save(function(err) {
      if (err) {
        return next(err);
      }

      res.json({ token: tokenForUser(user) });
    });
  });
};

exports.signIn = function(req, res, next) {
  console.log("messiiii");
  res.send({ token: tokenForUser(req.user) });
};
