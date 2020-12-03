const knex = require("../../db/knex");
var generateSafeId = require("generate-safe-id");
const { select } = require("../../db/knex");

let applyController = {};


applyController.create = async (req, res) => {
    const {teamName,title,description,leaderId,phone,email,leaderName } = req.body;
    knex
      .insert({
        teamName: teamName,
        title: title,
        description: description,
        leaderId: leaderId,
        phone:phone,
        email:email,
        leaderName:leaderName
      })
      .into("team")
      .then((result) => {
        res.end("teamapply");
      });
  };




module.exports = applyController;