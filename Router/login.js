const exp=require('express')
const app=exp()
const User=require('../model/user')

app.use(exp.json())

app.use(exp.json())

app.get('/',(req,res)=>{
res.send("Hello..")
})

app.post("/",(req,res)=>{
    var data=new User()
   let user={username:req.body.username}
   User.findOne(user,function (e,data){
       if(data.validpass(req.body.password)){
            res.status(200).send(data)
       }else{
            res.status(400).send("Enter Valid Credential.");
       }
   })
 })

module.exports=app