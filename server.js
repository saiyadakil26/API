const exp=require('express')
const app=exp()
require('dotenv').config()
require('./db/conn')

const Port=process.env.port || 3333

app.use(exp.json())

app.get("/",(req,res)=>{
res.send("Hello From Server");
})

app.use("/user",require('./Router/user'))
app.use("/login",require('./Router/login'))
app.use("/samp_coll",require('./Router/samp_coll'))

app.listen(Port,()=>{
    console.log(`Application is start on http://localhost:${Port}`);
})