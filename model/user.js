const mongoos=require('mongoose')
const validator=require("validator")

const userschema=new mongoos.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
            type:String,
            required:true,
            unique:[true,"Email Already Exists."],
            validate(value){
                if (!validator.isEmail(value)) {
                    throw Error("Envalid Email")
                }
            }
        },
    phone:{
        type:Number,
        min:10,
        required:true
    },
    address:{
        type:String,
        required:true,
    }
})

const User= new mongoos.model('User',userschema)
module.exports={
    User
}