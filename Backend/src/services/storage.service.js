

const {ImageKit} = require('@imagekit/nodejs');
// const dotenv = require('dotenv')

const random = ()=>{return parseInt(Math.random()*10000+ 55)} 



const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadFile(buffer) {

    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName:`image_${random()}.jpg`
    });
    return result
}


module.exports = uploadFile