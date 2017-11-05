var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var con = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"zhao19940801",
    database:"aaa"
})

/* GET home page. */
router.post('/list', function(req, res, next) {
  con.query("SELECT * FROM news1",function (err,rows) {
      res.header("Access-Control-Allow-Origin","*")
      res.send(rows)
  })
});
router.post("/xiugai",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*")
    var a = req.body.a;
    var b = req.body.b;
    var id = req.body.id;
    console.log(a)
    con.query(`UPDATE news1 SET title='${a}',content='${b}' WHERE id=${id}`,function (err,rows) {
            res.send(rows)
    })
})
router.post("/zeng",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*")
    var a = req.body.a;
    var b = req.body.b;
    console.log(b)
    con.query(`INSERT INTO news1 (title,content) VALUES ('${a}','${b}')`,function (err,rows) {
        res.send(rows)
    })
})
router.post("/del",function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*")
    var id = req.body.id;
    console.log(id)
    con.query(`DELETE FROM news1 WHERE id=${id}`,function (err,rows) {
        res.send(rows)
    })
})

module.exports = router;
