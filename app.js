const express=require('express');
const bodyParser=require('body-parser');
const app = express();


const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));
var mongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/test';
app.post('/newuser', function(req, res) {
	username=req.body.username;
	password=req.body.password;
    //console.log(req.body.username);
    //console.log(req.body.password);
    //res.send({postedUserName: req.body.username});
    
mongoClient.connect(url,function(err,db){
	
	db.collection('users',function(err,collection){
		collection.update({username},{$set:{username,password}},{upsert:true},function(err,result){
			//res.send(result.insertedCount);
			res.json(result.result.nModified);
		});
	})
})
});

app.post('/checkuser',function(req,res){
	username=req.body.username;
	password=req.body.password;

	mongoClient.connect(url,function(err,db){
	db.collection('users',function(err,collection){
		collection.findOne({},{username,password},function(err,result){
			res.send(result);
			//console.log(result);
		});
		
	})
})
})

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Your application starts listening at Port ${PORT}`);
  });
}
app.get('/',function(req,res){
	res.render('index.ejs');
})
