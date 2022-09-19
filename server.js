const exp=require('express')
const app=exp()
require('./db/conn')

const Port=process.env.port || 3333

app.use(exp.json())

app.get("/",(req,res)=>{
res.send("Hello From Server");
})

app.use("/user",require('./Router/user'))

app.listen(Port,()=>{
    console.log(`Application is start on http://localhost:${Port}`);
})