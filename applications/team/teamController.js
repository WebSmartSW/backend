const knex = require("../../db/knex");
var generateSafeId = require("generate-safe-id");
const { select } = require("../../db/knex");

let teamController = {};




  teamController.read = function (req, res) {
  knex("team")
      
      .select("teamName", "title", "description","leaderName")
      .then((teamList) => {
      res.json(teamList);
  });
};


module.exports = teamController;