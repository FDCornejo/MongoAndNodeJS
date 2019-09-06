import { Router } from 'express'
const Director = require('../models/directorModel')

export const directorRouter = Router()

directorRouter.get('/',(req, res)=> {
    const b = req.body
    res.status(200).json(b)
})


directorRouter.get('/prueba',(req, res)=> {
    Director.find((err,Directors)=>{
        if(err)
            return res.status(500).send({message:'Error interno'})
        if(!Directors)
            return res.status(404).send({message: 'No hay Directores'})
        return res.status(200).send({Directors})    
    }  )

})




directorRouter.post('/save', (req, res) => {
	const params = req.body;
	let director = new Director();
	if (true) {
        console.log(params)
		director.name = params.name
		director.age = params.age
        director.save((err, directorStored) => {
            if(err) return res.status(500).send({message: 'Internal Server error, Client doesn´t saved'})
            if(directorStored) res.status(200).send({client: directorStored})
            else res.status(404).send({message: 'Client not saved!'})
        })
			
	} else {
		res.status(400).send({message: 'Send all data please'})
	}
})










