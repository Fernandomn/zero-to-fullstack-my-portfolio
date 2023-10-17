const router = require("express").Router();

// /portfolio
router.get("/", (req, res) => {
  const data = [
    {
      id: 1,
      name: "My first project - edit",
      createdAt: "2023-10-01",
    },
    {
      id: 2,
      name: "My second project",
      createdAt: "2023-10-02",
    },
    {
      id: 3,
      name: "My third project",
      createdAt: "2023-10-03",
    },
  ];
  res.json({ success: true, data: data });
});

router.get("/:portfolioId", (req, res) => {
  console.log(`Este é o id informado: ${req.params.portfolioId}`);

  res.json({ success: true, id: req.params.portfolioId });
});

router.post("/", (req, res) => {
  res.json(req.body);
});

module.exports = router;
