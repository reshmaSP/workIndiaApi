
const { saveUser } = require("../controller/UserController");
const { login ,getTrain} = require("../controller/UserController");
// const {getTrain}-require("")
const db = require("../config/db");

router.post("/signup", async (req, res) => {
    try {
      let result = await saveUser(req.body);
      res.status(result.status_code).json(result);
    } catch (error) {
      res.status(500).json({ error: error + "" });
    }
  });


  router.post("/login", async (req, res) => {
    try {
      console.log(req.body);
      let result = await login(req.body);
      res.status(result.status_code).json(result);
    } catch (error) {
      res.status(500).json({ error: error + "" });
    }
  });

  // getTrain(src,des)
  router.get("/getTrain/query:?", async (req, res) => {
    try {
      // let start = new Date(req.query.start_date);
      // let end = new Date(req.query.end_date);
      // let sort = req.query.sort_by_date;
      let result = await getTrain(req.query.src, req.query.des);
      res.status(result.status_code).json(result);
    } catch (error) {
      res.status(500).json({ error: error + "" });
    }
  });
  module.exports = router;