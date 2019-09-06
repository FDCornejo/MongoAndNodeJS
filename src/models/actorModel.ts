import mongoose from 'mongoose'
let Schema =mongoose.Schema

let ActorSchema  = new Schema({
name:String,
age:Number
  });

module.exports= mongoose.model('Actor', ActorSchema);

