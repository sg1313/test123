const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "react-project/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/react-project/build/index.html"));
});

app.get("/albums", (req, res) => {
  res.json({
    name: "proof",
    info: "digital sigle",
  });
});

app.listen(8080, function () {
  console.log("listening on 8080");
});

// 개발되어 있지 않은 페이지를 유저가 접속한 경우 해당 페이지 띄우기
// 리액트라우터 쓰는 경우 이거 최하단에 추가해놓는게 좋음
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/react-project/build/index.html"));
});
