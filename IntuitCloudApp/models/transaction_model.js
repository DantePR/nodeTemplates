var mongoose = require('mongoose');


// define the schema for our user model
var transactionSchema = mongoose.Schema({
	
  
           type               : String,
            user_id           : {
    		 type: mongoose.Schema.Types.ObjectId,
             ref: 'Users'},
           
             TotalAmt            : Number,
             DueDate            : Date,
             ref_id : String,
		     vendor_name : String,
		     vendor_id : String,
		     status : String,
		     response: String
  
          
  

}); 


// create the model for machines and expose it to our app
module.exports = mongoose.model('Transactions', transactionSchema);
