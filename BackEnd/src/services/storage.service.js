const imageKit=require('@imagekit/nodejs')

const ImageKit= new imageKit({
  privateKey: process.env.IMAGEKIT_KEY
})

async function uploadFile(buffer){
  const result=await ImageKit.files.upload({
    file:buffer.toString("base64"),
    fileName:"Image.png"
  })

  return result
}

module.exports=uploadFile