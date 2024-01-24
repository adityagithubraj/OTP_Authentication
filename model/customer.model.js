const mongoose = require("mongoose")

//..........customer schema..................//
const customerSchema = mongoose.Schema({
    name : {type : String },
    contect : {type : String },
    address : {type : String , required : true}
})


//.................customer model..............//

const CustomerModel = mongoose.model("Customer" , customerSchema)

module.exports={CustomerModel}