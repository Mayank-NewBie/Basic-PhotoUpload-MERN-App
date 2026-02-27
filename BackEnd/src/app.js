const express= require('express')
const cors=require('cors')
const multer=require('multer')
const postModel=require('./models/post.model.js')
const uploadFile=require('./services/storage.service.js')


const app= express()

app.use(cors())
app.use(express.json())
const upload=multer({storage: multer.memoryStorage()})


app.post('/create-post',upload.single('image'),async (req,res) => {
  const result= await uploadFile(req.file.buffer)

  const post= await postModel.create({
    image:result.url,
    caption:req.body.caption
  })
  res.status(201).json({
    message:'Post Created',
    post:post
  })
})

app.get('/post', async (req,res) => {
  const fetchPost=await postModel.find()
  
  res.status(200).json({
    message:"Posts Fetched",
    posts:fetchPost
  })
})

module.exports=app