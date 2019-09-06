import mongoose from 'mongoose'
let Schema =mongoose.Schema

let DirectorSchema  = new Schema({
name:String,
age:String
  });

module.exports= mongoose.model('Director', DirectorSchema);