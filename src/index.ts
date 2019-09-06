import  mongoose from 'mongoose'
import express from 'express'
import bodyParser from 'body-parser'
import {movieRouter} from './controllers/movieController'
import {directorRouter} from './controllers/directorController'
import {actorRouter} from './controllers/actorControllers'

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/cartelera' ,{useNewUrlParser: true})
.then(()=>{
    
}).catch(err=> console.log ("Chales no se conecto :'v  "+ err))

const port = process.env.port || 1337
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())






app.use('/movies',movieRouter)
app.use('/director',directorRouter)
app.use('/actor',actorRouter)


app.get('/', (req, res)=> {
    res.send("API is running OK")
})


app.listen(port, ()=> {
    console.log('App is running in port: ' + port)
})



//import { authorRouter } from './controllers/authorController'
//import { bookRouter } from './controllers/bookController';





//app.use('/movies',movieRouter)
//app.use('/authors', authorRouter)
//app.use('/books',bookRouter)

