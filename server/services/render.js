const axios = require("axios");
exports.homeRoute = (req, res) => {
  //make get request  to api
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
  var userid = req.params.id;
  axios
    .get(`http://localhost:3000/api/user/${userid}`)
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};