const mysqlConn = require('../database/database');

fs = require('fs');

const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user",
};

module.exports = class Provider {

  constructor(newId, newFirstName, newLastName, newEmail, newPassword) {
    this.id = newId;
    this.firstName = newFirstName;
    this.lastName = newLastName;
    this.email = newEmail;
    this.password = newPassword;
    this.role = roles.USER;
  }

  get() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("SELECT * FROM provider", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

  create(newProvider) {
    console.log(newProvider);
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO provider set ?", newProvider, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(newProvider);
        }
      });
    });
  };

  getById(providerId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from provider where id = ? ", providerId, function (
        err,
        res
      ) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

  // not working
  updateById(provider, providerId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE user SET provider = ? WHERE id = ?",
        [provider, providerId],
        function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  };

  removeById(providerId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM provider WHERE id = ?", providerId, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

}