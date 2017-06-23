var express = require('express');
var router = express.Router();
var domain = require("../../core/index");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/reg", function (req, res) {
    var loginname = req.body.loginname;
    var email = req.body.email;
    var password = req.body.password;
    var confirm = req.body.confirm;

    // if (password === confirm) {
    //     domain
    // }
});
router.post("/login");
router.post("/update_pwd");
router.post("/update_email");

module.exports = router;