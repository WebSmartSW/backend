const knex = require("../../db/knex");
var generateSafeId = require("generate-safe-id");
const { select } = require("../../db/knex");

let applyController = {};


applyController.create = async (req, res) => {
    const {teamName,title,description,leaderId,phone,email,leaderName,members } = req.body;
    const membersToString = JSON.stringify(members)
    knex
      .insert({
        teamName: teamName,
        title: title,
        description: description,
        leaderId: leaderId,
        phone:phone,
        email:email,
        leaderName:leaderName,
        members:membersToString
      })
      .into("team")
      .then(() => {
        res.send("A project is created");
      });
  };




module.exports = applyController;