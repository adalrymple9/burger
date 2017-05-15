var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.all("burger", callback);
    },
    insertOne: function(burger, callback) {
        orm.create("burger", burger, callback);
    },
    updateOne: function(condition, burger, callback) {
        orm.update("burger", condition, burger, callback);
    },
    delete: function(condition, callback) {
        orm.delete("burger", condition, callback);
    }
};

module.exports = burger;
