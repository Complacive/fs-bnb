const mysqlConn = require('../database/database');

fs = require('fs');

const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user",
};

module.exports = class User {

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
      mysqlConn.query("SELECT * FROM user", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

  create(newUser) {
    console.log(newUser);
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO user set ?", newUser, function (err, res) {
        if (err) {
          reject(err);
        } else {
          //resolve(newUser);
          resolve(res.insertId);
        }
      });
    });
  };

  getByEmail(email) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from user where email = ? ", email, function (
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
  }

  getById(userId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from user where id = ? ", userId, function (
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

  // id, firstName, lastName, role, email, password
  updateById(userId, user) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE user SET firstName = ?, lastName = ?, role = ?, email = ?, password = ?, WHERE id = ?",
        [
          user.firstName,
          user.lastName,
          user.role,
          user.email,
          user.password, 
          userId
        ],
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

  removeById(userId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM user WHERE id = ?", userId, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

  
}