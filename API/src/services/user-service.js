var User = require("../models/user-model");

module.exports = class UserService {
  constructor() {}

  getUsers() {
    return new Promise((resolve, reject) => {
      User.get((err, res) => {
        if (err) {
          reject(err);
          console.log(err);
        }
        resolve(res);
      });
    });
  }

  getById(userId) {
    return new Promise((resolve, reject) => {
      User.getById((err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }


}