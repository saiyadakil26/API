const mongoos=require('mongoose')
const crypto=require('crypto')
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
    },
    username:{
        type:String,
        required:true, 
    },
    has:String,
    salt:String,
})

userschema.methods.setpass= function (password){
    this.salt=crypto.randomBytes(16).toString("hex")
    this.has=crypto.pbkdf2Sync(password,this.salt,1000,64,`sha512`).toString('hex');
}
userschema.methods.validpass=function(password){
    var has=crypto.pbkdf2Sync(password,this.salt,1000,64,`sha512`).toString("hex")
    return this.has===has
}
const User=module.exports=mongoos.model('User',userschema)