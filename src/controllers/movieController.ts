import { Router } from 'express'
const MovieSchema = require('../models/movieModel')
const Actor = require('../models/actorModel')
const Director = require('../models/directorModel')
export const movieRouter = Router()

movieRouter.get('/',(req, res)=> {
    const b = req.body
    res.status(200).json(b)
})


movieRouter.get('/prueba',(req, res)=> {
    MovieSchema.find((err,movies)=>{
        if(err)
            return res.status(500).send({message:'Error interno'})
        if(!movies)
            return res.status(404).send({message: 'No hay Clientes'})
        return res.status(200).send({movies})    
    }  )

})

movieRouter.post('/actor',(req, res)=> {
    const params = req.body;
    Actor.find({name:params.name},(err,Actors)=>{
        if(err)
            return res.status(500).send({message:'Error interno'})
        if(!Actors)
            return res.status(404).send({message: 'No hay Actores'})
        return res.status(200).send({Actors})    
    }  )

})
movieRouter.post('/director',(req, res)=> {
    const params = req.body;
    Director.find({name:params.name},(err,Directors)=>{
        if(err)
            return res.status(500).send({message:'Error interno'})
        if(!Directors)
            return res.status(404).send({message: 'No hay Directores'})
        return res.status(200).send({Directors  })    
    }  )

})





movieRouter.post('/save',  (req, res) => {
    const params = req.body;
    const movie =new MovieSchema()

	if (true) {
		movie.title = params.title
        movie.minutes = params.minutes
        
        Director.findOne({name:params.director},(err,Directors)=>{
            if(err)
                return res.status(500).send({message:'Error interno'})
            if(!Directors)
                movie.director="Sin Director"
            if(Directors){
                movie.director=Directors
            }
        })

            Actor.findOne({name:params.actor},(err,Actors)=>{
                if(err)
                    return res.status(500).send({message:'Error interno'})
                if(!Actors)
                    movie.actor="Sin Actores"
                if(Actors)
                    movie.actor=Actors 
              
            }  )

          movie.save((err, movieStored) => {
                        if(err) return res.status(500).send({message: 'Internal Server error, Movie doesn´t saved'})
                        if(movieStored) res.status(200).send({Movie: movieStored})
                        else res.status(404).send({message: 'Actor not saved!'})
                    })

        




			
	} else {
		res.status(400).send({message: 'Send all data please'})
	}
})


