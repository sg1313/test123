var DataTypes = require("sequelize").DataTypes;
var _albums = require("./albums");
var _board = require("./board");

function initModels(sequelize) {
  var albums = _albums(sequelize, DataTypes);
  var board = _board(sequelize, DataTypes);


  return {
    albums,
    board,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
