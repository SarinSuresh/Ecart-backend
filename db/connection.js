//Import Mongoose
const mongoose = require('mongoose')

//to access connection string from .env file
const db = process.env.DATABASE


mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('Database tree working Good');
}).catch((error)=>{
    console.log(error);
})