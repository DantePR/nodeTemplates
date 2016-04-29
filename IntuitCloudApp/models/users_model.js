var mongoose = require('mongoose');


// define the schema for our user model
var userSchema = mongoose.Schema({
	
  
            name               : String,
            
            consumer_token      : String,
            consumer_pass       : String
       
  

}); 


// create the model for machines and expose it to our app
module.exports = mongoose.model('Users', userSchema);
