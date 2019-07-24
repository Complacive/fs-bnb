'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    'providers', 
    {
    id: { type: 'int', length: 6, primaryKey: true, autoIncrement: true },
    name: { type: 'string', length: 45 },
    email: { type: 'string', length: 45} ,
    address: { type: 'string', length: 45}
  }, 
  callback
  );
}

exports.down = function(db, callback) {
  db.dropTable('providers');
  callback
};

exports._meta = {
  "version": 1
};
