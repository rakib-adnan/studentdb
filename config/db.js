const mongoose = require('mongoose');
const color = require('colors')

//todo-  create a mongoose schema
const mongoDBConnect = async() =>{

      try{
         await mongoose.connect(process.env.MONGOOSE_SERVER)
          console.log('mongoDB connected '.bgGreen.black);

      }catch(error){

          console.log(`${error}`.bgRed.black);
      }
}

//!exports connction
module.exports = mongoDBConnect;


