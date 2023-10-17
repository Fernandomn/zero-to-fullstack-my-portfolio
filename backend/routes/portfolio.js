const router = require("express").Router();
const Portfolio = require("./../models/Portfolio");

// CREATE
router.post("/", async (req, res) => {
  const portfolio = new Portfolio({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPortfolio = await portfolio.save();
    res.json({ success: true, data: savedPortfolio });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.find();

    res.json({ success: true, data: portfolio });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});
router.get("/:slug", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ slug: req.params.slug });
    res.json({ success: true, data: portfolio });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});

// UPDATE

// DELETE

module.exports = router;
