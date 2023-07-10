const { saveTrain } = require("../controller/AdminController");


router.post("/addTrain", async (req, res) => {
    try {
      let result = await saveTrain(req.body);
      res.status(result.status_code).json(result);
    } catch (error) {
      res.status(500).json({ error: error + "" });
    }
  });

  module.exports = router;