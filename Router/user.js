const exp=require('express')
const app=exp()
const User=require('../model/user')

app.use(exp.json())

app.get('/',(req,res)=>{
    User.find(function(err, data) {
        res.status(200).send(data);
    })
})

app.post("/",(req,res)=>{
    var data=new User(req.body)
    data.setpass(req.body.password)
    data.save().then(()=>{
       res.status(201).send("User Registered.");
    }).catch((e)=>{
        res.status(400).send(e);
    })
 })

module.exports=app