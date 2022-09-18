const exp=require('express')
const app=exp()
//require('./db/conn')
const User=require('./model/user')

const Port=process.env.port || 3333

app.use(exp.json())

app.get("/",(req,res)=>{
res.send("Hello From Server");
})

app.post("/",(req,res)=>{
    const data=new User(req.body)
    data.save().then(()=>{
       res.status(201).send("User Registered.");
    }).catch((e)=>{
        res.status(400).send(e);
    })
    res.send("Hello From Server");
    })

app.listen(Port,()=>{
    console.log(`Application is start on http://localhost:${Port}`);
})