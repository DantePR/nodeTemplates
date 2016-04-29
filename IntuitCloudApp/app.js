
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

var Transactions = require('./models/transaction_model');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
//GET TRANS BY ID 
app.get('/transaction_byTransID', function(req, res){
   
   
    var transID = new ObjectId(req.query.trans_id);
   
    Transactions.find(transID)
    	    .sort({CreadetDate:1})
    	    .exec(
    	    
    	    function(err, trans) {
    			if (err)
    				return console.log(err);
    	
    			res.send(trans);
    		}); 		
   
   
  });
//GET TRANS BY Status
app.get('/transaction_byStatus', function(req, res){
   
	 var Satus = new ObjectId(req.query.status);
    
    Transactions.find({status:Satus})
    .exec(
    
    function(err, trans) {
    	if (err)
			return console.log(err);

		res.send(trans);
	}); 		
  });
//GET ALL
app.get('/transaction', function(req, res){
	   

   
   Transactions.find()
   .exec(
   
   function(err, trans) {
   	if (err)
			return console.log(err);

		res.send(trans);
	}); 		
 });


//POST

//MOCK TRANS FOR TESTING
app.post('/mockTrans',function(req, res){
	
       
        var newTrans = new Transactions();
        var data = req.body;
        
        newTrans.type = data.type;
        newTrans.amount = data.amount;
        
        newTrans.save(function(err) {
        	
        	if (err) {console.log(err)};
        	 res.render('index.ejs');
        	
        	
        });
     
        
       
        
      });



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
