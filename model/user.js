const mongoose= require('mongoose');


const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    email:{
        type:String,
        required:true
    },
    currentblance:{
        type:Number,
        required:true
    }
});
const customer = mongoose.model('customer',customerSchema);
module.exports=customer;