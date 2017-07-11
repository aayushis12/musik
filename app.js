const express=require('express');
const bodyParser=require('body-parser');
const app = express();


const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.post('/newuser', function(req, res) {
    console.log(req.body.username);
    console.log(req.body.password);
    res.send({postedUserName: req.body.username});
});

var mongoClient=require('mongodb').MongoClient;

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Your application starts listening at Port ${PORT}`);
    var url='mongodb://localhost:27017/test';
  });
}
app.get('/',function(req,res){
	res.render('index.ejs');
})