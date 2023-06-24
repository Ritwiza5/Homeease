const mongoose=require("mongoose");

const connectDatabase= ()=>{
   

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true})
    .then(
    (data)=>{
    console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
// }).catch((err)=>{
//     console.log(err)         ....error handled  in unhandled promise in server.js
//})
}

module.exports=connectDatabase