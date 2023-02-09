const express = require("express");
const board = require("./models/board");
const models = require("./models/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/discography/:albums", async (req, res, next) => {
  console.log("--------파라미터---->", req.params);
  console.log("----album명만 꺼내기>", req.params.albums);

  const proofInfo = await models.albums.findAll({
    raw: true,
  });
  console.log(proofInfo);
  res.json(proofInfo);
});

app.get("/board");

app.get("/board", async (req, res, next) => {
  console.log("-----board게시판----");

  const board = await models.board.findAll({
    raw: true,
  });
  console.log(board);
  res.json(board);
});

app.set("port", process.env.PORT || 8080);

// 서버 실행
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
