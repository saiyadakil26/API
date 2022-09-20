const mongoos=require('mongoose')

const sampschema=new mongoos.Schema({
    project_name:{
        type:String
    },
    day:{
        type:Number
    },
    month:{
        type:Number
    },
    year:{
        type:Number
    },
    location:{
        type:String 
    },
    collector_name:{
        type:String 
    },
    latitude:{
        type:Number
    },
    longitude:{
        type:Number
    },
    tran_cond:{
        type:String
    },
    samp_method:{
        type:String
    },
    equpment:{
        type:String 
    },
    market_name:{
        type:String 
    }, 
    vendor_name:{
        type:String 
    },
    commodity:{
        type:String
    },
    item:{
        type:String
    },
    weight:{
        type:String
    },
    origin:{
        type:String
    },
    sr:{
        type:Number 
    },
    SampleCode:{
        type:String 
    },
    PRLCode:{
        type:String 
    }
})
const sample=module.exports=mongoos.model('sampal',sampschema)