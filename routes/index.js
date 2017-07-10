var express      = require("express"),
    router       = express.Router();


//root route
router.get("/", (req, res) => {
    res.render("home");
});


module.exports = router;