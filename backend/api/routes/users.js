var express = require('express');
var userModel=require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var userDetails=new userModel({
    name:'Anadi Anant Jain',
    email: 'jainanadianant@gmail.com',
    password:'anadi123',
  });

  userDetails.save(function(err,req1){
    if(err) throw err;

      res.render('index', { title:'User Records Inserted'});
  })
  res.render('index', { title: 'Users Data' });
});

module.exports = router;
