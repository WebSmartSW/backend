const knex = require("../../db/knex");
var generateSafeId = require("generate-safe-id");
const { select } = require("../../db/knex");

let teamController = {};




teamController.read = function (req, res) {
  console.log("hi")
  knex("team")
      
      .select("teamName", "title", "description","leaderName","id","members","leaderId","email","phone")
      .then((teamList) => {
      //   console.log(teamList)
       res.json(teamList);
  });
};



module.exports = teamController;