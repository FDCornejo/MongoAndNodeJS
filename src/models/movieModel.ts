import mongoose from 'mongoose'
let Schema = mongoose.Schema
const actorSchema= require('./actorModel').schema
const directorSchema= require('./directorModel').schema

let MoviesSchema  = new Schema({
title:String,
minutes:String,
actor:actorSchema,
director:directorSchema
  });

module.exports= mongoose.model('Movies', MoviesSchema);