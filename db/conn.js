const mongoos=require('mongoose')
require('dotenv').config()

mongoos.connect(`mongodb+srv://${process.env.Usernamedb}:${process.env.passworddb}@cluster0.tglidc3.mongodb.net/${process.env.db}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
    console.log("Database Connection Establish.");
}).catch((e)=>{
    console.log("Something Went Wrong With Database");
    console.log(e);
})