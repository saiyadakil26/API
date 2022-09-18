const mongoos=require('mongoose')

mongoos.connect("mongodb+srv://akil:akilmongodb@cluster0.tglidc3.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
    console.log("Database Connection Establish.");
}).catch((e)=>{
    console.log("Something Went Wrong With Database");
    console.log(e);
})