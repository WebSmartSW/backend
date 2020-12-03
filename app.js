const express = require("express");
const knex = require("knex");
const knexFile = require("./knexfile").development;
const db = knex(knexFile);


const team = require("./routes/teamRoute");
const apply = require("./routes/applyRoute")

const app = express();
const bodyParser = require("body-parser");

const port = 7000;




//db.migrate.latest();
//db.seed.run();
//db.migrate.down();

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(express.static("swagger"));



//app.use(jwtMiddleWare); // 토큰 검증 미들웨어.


app.use("/admin", team);
app.use("/admin",apply);

app.listen(port, () => {
  console.log("Express listening on port", port);
});
