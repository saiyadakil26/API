const exp=require('express')
const app=exp()
const counter=require('../model/counter')
const sample=require('../model/sample')

app.use(exp.json())

app.post("/",(req,res)=>{

    var mdata=req.body;

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; 
    let dd = today.getDate();
    counter.find((e,data)=>{

        mdata.day=dd
        mdata.month=mm
        mdata.year=yyyy
        mdata.sr=data[0].counter
        mdata.SampleCode=`${req.body.location.split("_")[0]}-${dd}${mm}${yyyy.toString().slice(2,4)}-${req.body.vendor_name.split("_")[0]}-${req.body.item.split("_")[0]}`
        mdata.PRLCode=`PRL-${data[0].counter}/${mm}/${yyyy.toString().slice(2,4)}`

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
            var dat=new sample(mdata)
            dat.save().then(()=>{
                res.status(201).send("User Registered.");
             })
        });
    })
})

module.exports=app