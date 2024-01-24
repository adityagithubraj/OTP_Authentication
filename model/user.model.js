const mongoose = require("mongoose")

//.........user schema.............//
const userSchema = mongoose.Schema({
    username : {type : String },
    email : {type : String , required : true},
    password : {type : String , required : true}
})


//...........user model........//

const UserModel = mongoose.model("user" , userSchema)

module.exports={UserModel}