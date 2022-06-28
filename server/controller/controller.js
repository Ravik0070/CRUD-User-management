var userdb = require("../model/model");

// create and save new user
exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empyty." });
    return;
  }

  //new user
  const user = new userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user in database
  user
    .save(user)
    .then((data) => {
      //   res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating ",
      });
    });
};
//retrieve and return all users/user details
exports.find = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    userdb
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Not found any user with id ${id}` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error retrieving data by id` });
      });
  } else {
    userdb
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "Error occured white retrieving" });
      });
  }
};



// find by id one
exports.findbyidone = (req,res)=>{
  const id = req.params.id;
    userdb
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Not found any user with id ${id}` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error retrieving data by id` });
      });
}

//update a user by id
exports.update = (req, res) => {
  //validate request
  if (!req.body) {
    return res
      .status(400)
      .send({ message: "Data to be updated can not be empyty." });
  }
  const id = req.params.id;
  userdb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `cannot update with ${id}. Maybe id not found` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Error updating user" });
    });
};

//delete a user by id
exports.delete = (req, res) => {
  const id = req.params.id;
  userdb
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `cannot delete with id. maybe id is wrong` });
      } else {
        res.send({ message: `user was deleted successfully` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `could not delete user with id${id}` });
    });
};
