const express = require('express');
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee')
var router = express.Router();

router.get('/', function(req, res) {
    res.render('addOrEdit', { title: 'Insert Details' })
  });

  router.post('/', function(req, res) {
    insertRecord(req,res)
  });

  //insert

  function insertRecord(req,res){
      var employee = new Employee();
      employee.fullname = req.body.fullname;
      employee.email = req.body.email;
      employee.mobile = req.body.mobile;
      employee.city = req.body.city;
      employee.save((err, doc)=>{
          if(!err)
          res.redirect('/employee/list');
          else{
              console.log('error during record innsertion :' + err);
          }
      })
  }


  router.get('/list', function(req, res) {
    Employee.find((err, docs) => {
        if (!err){
            res.render('list', {
                list: docs
            })
        }
        else{
            console.log('Error in retrieving employee list :' + err);
        }
    })
  });


module.exports = router;