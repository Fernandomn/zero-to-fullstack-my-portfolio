const router = require("express").Router();
require("./../db/mongoConnection");

const portfolio = require("./portfolio");

router.get("/", (req, res) => {
  res.json({
    success: false,
    message: "Please, do not call /api for this server",
  });
});

router.use("/portfolio", portfolio);

module.exports = router;
