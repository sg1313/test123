const express = require("express");
const board = require("./models/board");
const models = require("./models/index");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/discography/:albums", async (req, res, next) => {
  console.log("--------파라미터---->", req.params);
  console.log("----album명만 꺼내기>", req.params.albums);

  // let { albumName } = req.body;
  // console.log("---req.body---", albumName);
  let searchAlbum = req.params.albums;

  const proofInfo = await models.albums.findOne({
    raw: true,
    where: {
      name: searchAlbum,
    },
  });
  console.log(proofInfo);
  res.json(proofInfo);
});

app.get("/board", async (req, res, next) => {
  console.log("-----board게시판----");

  const board = await models.board.findAll({
    raw: true,
  });
  console.log(board);
  res.json(board);
});

app.post("/board", async (req, res, next) => {
  const board = await models.board.create({
    raw: true,
    // nickname : req.body.nickname,
    content: req.body.content,
    // date : req.body.date,
  });
  console.log("----글 등록 완----", board);
  console.log("----------req.body--------", req.body);
  res.json(board);
});

app.set("port", process.env.PORT || 8080);

// 서버 실행
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
