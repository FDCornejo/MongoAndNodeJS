import { Router } from 'express'
const MovieSchema = require('../models/movieModel')
const Actor = require('../models/actorModel')
const Director = require('../models/directorModel')
export const movieRouter = Router()


movieRouter.get('/',(req, res)=> {
    MovieSchema.find((err,movies)=>{
        if(err)
            return res.status(500).send({message:'Error interno'})
        if(!movies)
            return res.status(404).send({message: 'No hay Clientes'})
        return res.status(200).send({movies})    
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


movieRouter.delete('/:id', (req, res) => {
    const dato = req.params.id;
    console.log(dato)

    MovieSchema.findByIdAndRemove(dato,(err,result)=>{
        if(err){
            return res.status(500).send({message: 'Internal Server error, product doesn´t Deleted'})
        }
        if(result)
        res.status(200).send({message: 'Si se borro'})

        else
        res.status(404).send({message: 'pelicula no Borrada!'})
    })
	
})



movieRouter.patch('/:id',(req,res)=>{
    const elID = req.params.id;
    const params = req.body;
    MovieSchema.update({_id:elID},{$set:params},(err,result)=>{
        if(err){
            return res.status(500).send({message: 'Internal Server error, product doesn´t Deleted'})
        }
        if(result)
        res.status(200).send({message: 'Si Actualizado'})

        else
        res.status(404).send({message: 'Actor no actualizado!'})

    })
})