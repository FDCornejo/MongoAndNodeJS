import { Router } from 'express'
const Actor = require('../models/actorModel')

export const actorRouter = Router()


actorRouter.get('/',(req, res)=> {
    Actor.find((err,Actors)=>{
        if(err)
            return res.status(500).send({message:'Error interno'})
        if(!Actors)
            return res.status(404).send({message: 'No hay Directores'})
        return res.status(200).send({Actors})    
    }  )

})


actorRouter.post('/save', (req, res) => {
	const params = req.body;
	let actor = new Actor();

	if (true) {
		actor.name = params.name
		actor.age = params.age
        actor.save((err, actorStored) => {
            if(err) return res.status(500).send({message: 'Internal Server error, Client doesn´t saved'})
            if(actorStored) res.status(200).send({client: actorStored})
            else res.status(404).send({message: 'Actor not saved!'})
        })
			
	} else {
		res.status(400).send({message: 'Send all data please'})
	}
})





actorRouter.delete('/:id', (req, res) => {
    const dato = req.params.id;
    Actor.findByIdAndRemove(dato,(err,result)=>{
        if(err){
            return res.status(500).send({message: 'Internal Server error, product doesn´t Deleted'})
        }
        if(result)
        res.status(200).send({message: 'Si se buorro'})

        else
        res.status(404).send({message: 'Actor no Borrado!'})
    })
	
})


actorRouter.patch('/:id',(req,res)=>{
    const elID = req.params.id;
    const params = req.body;
    Actor.update({_id:elID},{$set:params},(err,result)=>{
        if(err){
            return res.status(500).send({message: 'Internal Server error, product doesn´t Deleted'})
        }
        if(result)
        res.status(200).send({message: 'Si Actualizado'})

        else
        res.status(404).send({message: 'Actor no actualizado!'})

    })
})








