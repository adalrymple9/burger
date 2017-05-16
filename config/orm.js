var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// Object Relational Mapper
var orm = {
    all: function(tableName, callback) {
        connection.query(
            "SELECT * FROM ??", [tableName],
            function(err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    },
    create: function(tableName, obj, callback) {
        connection.query(
            "INSERT INTO ?? SET ?", [tableName, obj],
            function(err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    },
    update: function(tableName, condition, obj, callback) {
        connection.query(
            "UPDATE ?? SET ? WHERE ?", [tableName, obj, condition],
            function(err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    },
    delete: function(tableName, condition, callback) {
        connection.query(
            "DELETE FROM ?? WHERE ?", [tableName, condition],
            function(err, result) {
                if (err) throw err;
                callback(result);
            }
        );
    }
};

module.exports = orm;
