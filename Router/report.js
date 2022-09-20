const exp=require('express')
const app=exp()
const samp=require('../model/sample')

app.get("/",(req,res)=>{
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; 
    let dd = today.getDate();
    let date={day:dd,month:mm,year:yyyy}
    samp.find(date,function (e,data){
             res.status(200).send(data)
    })
})
module.exports=app