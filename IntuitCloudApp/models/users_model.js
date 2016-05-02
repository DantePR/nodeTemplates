var mongoose = require('mongoose');


// define the schema for our user model
var userSchema = mongoose.Schema({
	
  
     name               : String,
            
             qbo_consumerKey              : String,
			 qbo_consumerSecret              : String,
			 qbo_oauthToken              : String,
			 qbo_oauthTokenSecret              : String,
			 qbo_companyID        : String,
			 wells_bearerId       : String
  

}); 


// create the model for machines and expose it to our app
module.exports = mongoose.model('Users', userSchema);
