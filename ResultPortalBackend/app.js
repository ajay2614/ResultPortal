const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const sequelize = require('./Util/database');
const students = require('./Models/students');
const teachers = require('./Models/teachers');
const cors = require('cors');
app.use(cors());

const router = express.Router();
router.use(express.json())
router.use(express.urlencoded({ extended: true }));

// app.post('/test',function(req,res){
//     const user = req.body;
//     res.send(user);
// });
app.get('/testget',function(req,res){
    res.send('142');
});
// app.post('/loginteacher',function(req,res){
//     var id = req.body.teacherid;
//     var password = req.body.password;
//     teachers.findAll({ where: { id: id ,password:password} }).then(function(teachers) {
//                 let teacher = teachers;
//                 var count = Object.keys(teacher).length;
//                 if(count==0){
//                     res.send('0');
//                 }else{
//                     //res.redirect('/allresults');
//                     sequelize.sync().then(function(){
//                         students.findAll().then(function(students){
//                             res.send(students);
//                         });
//                         });
//                 }
//                }).catch(err => {
//                 console.log(err);
//                 res.status(404).send({
//                     reason: err.message
//                 })
//             });
// });

app.post('/userexists',function(req,res){
    var id = req.body.teacherid;
    var password = req.body.password;
    teachers.findAll({ where: { id: id ,password:password} }).then(function(teachers) {
                let teacher = teachers;
                var count = Object.keys(teacher).length;
                if(count==0){
                    res.send('0');
                }else{
                     res.send('1');
                }
               }).catch(err => {
                console.log(err);
                res.status(404).send({
                    reason: err.message
                })
            });
});

app.post('/studentexists',function(req,res){
  var id = req.body.id;
  var dob = req.body.dob;
  students.findAll({ where: { id:id, dob: dob } }).then(function(students) {
              let student = students;
              var count = Object.keys(student).length;
              if(count==0){
                  res.send('0');
              }else{
                   res.send('1');
              }
             }).catch(err => {
              console.log(err);
              res.status(404).send({
                  reason: err.message
              })
          });
});

app.get('/getallstudents',function(req,res){
    sequelize.sync().then(function(){
    students.findAll().then(function(students){
    res.send(students);
    });
    });
});

app.post('/getstudent',function(req,res){
  var id = req.body.id;
  sequelize.sync().then(function(){
    students.findOne({where : {id:id}}).then(function(students){
    res.send(students);
    });
    });
});

app.post('/teststudent',function(req,res){
  var id = req.body.id;
  if(id===172695){
    res.send('1');
  }else{
    res.send('0');
  }
});
app.post('/addresult',function(req,res){
    var id = req.body.id; 
    var name = req.body.name; 
    var dob = req.body.dob;
    var scores = req.body.score;
		
		students.create(
			{id:id,name:name,dob:dob,score:scores},{raw:true,nest:true}
		).then(sequelize.sync().then(function(){
			students.findAll().then(function(){
					res.send('1');
			});
			})
			).catch(err => {
				console.log(err);
				res.send('0');
				res.status(404).send({
					reason: err.message
				})
		})
});
app.put('/editresult',function(req,res){
    var id = req.body.id;
    var name = req.body.name;
    var dob = req.body.dob;
    var scores = req.body.score;

    students.update(
      {name:name,dob:dob,score:scores},{where: {id: id },raw:true,nest:true}
    )
    .then(
      res.send('1')
    )
    .catch(err => {
      console.log(err);
			res.send('0');
      res.status(404).send({
      reason: err.message
    })
  })
});
	
app.post('/deleteresult',function(req,res){
  var id = req.body.id;

  students.destroy({where: {id:id}}).then(function(){
			res.send('1');
		})
    .catch(err => {	
      console.log(err);
			res.send('0');
      res.status(404).send({
      reason: err.message
    })
  });
});
app.listen(4000,function(req,res){
    console.log("running");
});