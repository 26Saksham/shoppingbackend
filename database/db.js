import mongoose from 'mongoose';
const DATABASE=process.env.DATABASE
const connection=async()=>{
    const url=`${DATABASE}`;
    try{
        await mongoose.connect(url,{useNewUrlParser:true});
        console.log("database is connected");
    }catch(error)
    {
        console.log("error while connecting")
    }
}

export default connection;