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
                    //resolve(res.id);
                    //resolve(res.insertId);
                    //console.log(res.insertId);
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


    updateById(listingId, listing) {
        return new Promise((resolve, reject) => {
            mysqlConn.query(
                "UPDATE listing SET providerId = ?, name = ?, description = ?, location = ?, price = ? WHERE id = ? ",
                [listing.providerId, listing.name, listing.description, listing.location, listing.price, listingId],
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