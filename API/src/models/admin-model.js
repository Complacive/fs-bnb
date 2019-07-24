const mysqlConn = require('../database/database');

fs = require('fs');

const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user",
};

module.exports = class Admin {

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
      mysqlConn.query("SELECT * FROM admin", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

  create(newAdmin) {
    console.log(newAdmin);
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO admin set ?", newAdmin, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(newAdmin);
        }
      });
    });
  };

  getById(adminId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from admin where id = ? ", adminId, function (
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
  updateById(admin, adminId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE user SET admin = ? WHERE id = ?",
        [admin, adminId],
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

  removeById(adminId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM admin WHERE id = ?", adminId, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

}