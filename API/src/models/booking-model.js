const mysqlConn = require('../database/database');

module.exports = class Booking {

    constructor(bookingId, listingId, userId, 
        dateFrom, dateTo, status) {
        this.id = bookingId;
        this.listingId = listingId;
        this.userId = userId;
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.status = status;
    }

    get() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM booking", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    create(newBooking) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO booking set ?", newBooking, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    getById(bookingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from booking where id = ? ", bookingId, function (
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
    updateById(booking, bookingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query(
                "UPDATE user SET booking = ? WHERE id = ?",
                [listing, listingId],
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

    removeById(bookingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM booking WHERE id = ?", bookingId, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

}