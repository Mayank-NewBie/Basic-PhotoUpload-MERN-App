const mongoose=require('mongoose')

async function connectDb(){
  try{
    await mongoose.connect(process.env.MONGODB_KEY)
    console.log("Connect To DB")
  }
  catch(err){
    console.log(`Error: ${err}`)
  }
}


module.exports=connectDb