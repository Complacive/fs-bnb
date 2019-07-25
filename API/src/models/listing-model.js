const mysqlConn = require('../database/database');

module.exports = class Property {

    constructor(listingId, providerId, listingName,
        listingDescription, listingLocation, listingPrice) {
        this.id = listingId;
        this.providerId = providerId
        this.name = listingName;
        this.listingDescription = listingDescription;
        this.location = listingLocation;
        this.price = listingPrice;
    }
    /*
    get() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM listing", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };
    */

    get() {
        return new Promise((resolve, reject) => {
            mysqlConn.query("SELECT * FROM listing", (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    //resolve(res);
                }
                let listings = res;
                mysqlConn.query(
                    "SELECT * FROM listing_imgurl_mapping WHERE listingImgId IN (SELECT id FROM listing);",
                    function (err, res) {
                        if (err) {
                            //console.log(err);
                            reject(err);
                        } else {
                            listings.forEach(listing => {
                                listing.imgUrl = [];

                                //console.log(res);
                                res.forEach(obj => {
                                    if (obj.listingImgId == listing.id) {
                                        //console.log(obj.imgUrl);
                                        listing.imgUrl.push(obj.imageUrl);
                                    }
                                });
                            });
                            //console.log("Listings: ", res)
                            resolve(listings);
                        }
                    }
                )
            });
        });
    };


    create(newListing) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("INSERT INTO listing set ?", newListing, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

    getById(listingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("Select * from listing where id = ? ", listingId, function (
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
    updateById(listing, listingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query(
                "UPDATE user SET listing = ? WHERE id = ?",
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

    removeById(listingId) {
        return new Promise((resolve, reject) => {
            mysqlConn.query("DELETE FROM listing WHERE id = ?", listingId, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    };

}