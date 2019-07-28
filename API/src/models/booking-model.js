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
            mysqlConn.query("SELECT * FROM bookings", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    getByListingId(listingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from bookings where listingId = ? ", listingId, function (
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

    create(newBooking) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO bookings set ?", newBooking, function (err, res) {
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
            mysqlConn.query("Select * from bookings where id = ? ", bookingId, function (
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

    updateStatus(bookingId, booking) {
        return new Promise((resolve, reject) => {
            mysqlConn.query(
                "UPDATE bookings SET status = ? WHERE id = ? ",
                [booking.status, bookingId],
                function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    
    /*
    // not working
    updateById(bookingId, bookingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query(
                "UPDATE user SET bookings = ? WHERE id = ?",
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
    */


    removeById(bookingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM bookings WHERE id = ?", bookingId, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

}