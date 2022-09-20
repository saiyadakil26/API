const mongoos=require('mongoose')
const user = require('./user')
const counterschema=new mongoos.Schema({
    counter:{
        type:Number
    },
    day:{
        type:Number
    },
    month:{
        type:Number
    },
    year:{
        type:Number
    },boss:{
        type:Number 
    }
})

const counter=module.exports=mongoos.model('counter',counterschema)