//var express = require('express');
const authenticate = require("./users/auth");
const library = require("./Plans/plan-library");
// const passport=require("./utilities/passport");
// const express = require('express');
// const app = express();
// // app.get('/authenticate', (req, res, next) => {
// //     authenticate.authenticateUser(req, res);
// // });
exports.authenticate = (req, res) => {
  authenticate.auth(req, res);
};
exports.library = (req, res) => {
    library.getPlan(req, res);
};
// app.post('/authenticate', authenticate);
// app.get('/library', passport.authenticate('jwt', {session: false}), library);