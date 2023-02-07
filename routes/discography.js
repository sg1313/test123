const express = require("express");
const router = express.Router();

router.post("/albums", (req, res) => {
  res.json({
    name: "앨범명",
  });
});

module.exports = router;
