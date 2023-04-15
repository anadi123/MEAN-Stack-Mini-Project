const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://anadi:anadi123@cluster0.hh18qef.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true});
var conn=mongoose.Collection;

var userSchema=new mongoose.Schema({
    name: String,
    email: String,
    password: String,

});

var userModel=mongoose.model('Users', userSchema);
module.exports=userModel;
