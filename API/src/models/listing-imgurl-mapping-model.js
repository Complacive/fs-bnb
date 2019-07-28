const mysqlConn = require('../database/database');

fs = require('fs');


// listing_imgurl_mapping
module.exports = class ListingImgUrl {

  constructor(newId, newListingImgId, newImgUrl) {
    this.id = newId;
    this.listingImgUrl = newListingImgId;
    this.imgUrl = newImgUrl;
  }

  get() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("SELECT * FROM listing_imgurl_mapping", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

  getImage(listingImageId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from listing_imgurl_mapping where listingImgId  = ? ", listingImageId, function (
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

  create(newImgListingUrl) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO listing_imgurl_mapping set ?", newImgListingUrl, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(newImgListingUrl);
        }
      });
    });
  };

  getById(imgId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from listing_imgurl_mapping where id = ? ", imgId, function (
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

  // id, listingImgId, imageUrl
  updateById(mappingId, mapping) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE listing_imgurl_mapping SET listingImgId = ?, imageUrl = ?,  WHERE id = ?",
        [
          mapping.listingImageId,
          mapping.imageUrl,
          mappingId
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

  removeById(imgListingUrl) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM listing_imgurl_mapping WHERE id = ?", imgListingUrl, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

  removeByListingId(listingId) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("DELETE FROM listing_imgurl_mapping WHERE listingImgId = ?", listingId, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

}