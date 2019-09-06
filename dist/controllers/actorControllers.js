"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Actor = require('../models/actorModel');
exports.actorRouter = express_1.Router();
exports.actorRouter.get('/', (req, res) => {
    const b = req.body;
    res.status(200).json(b);
});
exports.actorRouter.get('/prueba', (req, res) => {
    Actor.find((err, Actors) => {
        if (err)
            return res.status(500).send({ message: 'Error interno' });
        if (!Actors)
            return res.status(404).send({ message: 'No hay Directores' });
        return res.status(200).send({ Actors });
    });
});
exports.actorRouter.post('/save', (req, res) => {
    const params = req.body;
    let actor = new Actor();
    if (true) {
        actor.name = params.name;
        actor.age = params.age;
        actor.save((err, actorStored) => {
            if (err)
                return res.status(500).send({ message: 'Internal Server error, Client doesn´t saved' });
            if (actorStored)
                res.status(200).send({ client: actorStored });
            else
                res.status(404).send({ message: 'Actor not saved!' });
        });
    }
    else {
        res.status(400).send({ message: 'Send all data please' });
    }
});
//# sourceMappingURL=actorControllers.js.map