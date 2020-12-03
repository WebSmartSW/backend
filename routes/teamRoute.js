const express = require("express");
const router = express.Router();

const team = require("../applications/team/teamController.js");


// 프로젝트 생성 시 정보 받음
router.get("/team/list", team.read);

// 프로젝트 생성 시 키 값 생성
// router.post("/team", team.create);
// router.put("/team", team.update);

module.exports = router;
