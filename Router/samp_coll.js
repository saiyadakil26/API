const exp=require('express')
const app=exp()
const counter=require('../model/counter')

app.use(exp.json())

app.post("/",(req,res)=>{
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; 
    let dd = today.getDate();
    counter.find((e,data)=>{
        const up={counter:data[0].counter+1,
        day:parseInt(dd),
        month:parseInt(mm),
        year:yyyy
        }
        if (up.day==2) {
            up.boss=0
        }else if (up.day==1 && data[0].boss==0) {
            console.log("aa");
          up.counter=1,
          up.boss=1
        }
        counter.findOneAndUpdate({},up,{new:true,upsert:true,rawResult: true},function(err, doc) {
        return res.send('Succesfully saved.');
        });
    })
})

module.exports=app