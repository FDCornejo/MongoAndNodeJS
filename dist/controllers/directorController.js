"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Director = require('../models/directorModel');
exports.directorRouter = express_1.Router();
exports.directorRouter.get('/', (req, res) => {
    Director.find((err, Directors) => {
        if (err)
            return res.status(500).send({ message: 'Error interno' });
        if (!Directors)
            return res.status(404).send({ message: 'No hay Directores' });
        return res.status(200).send({ Directors });
    });
});
exports.directorRouter.post('/save', (req, res) => {
    const params = req.body;
    let director = new Director();
    if (true) {
        console.log(params);
        director.name = params.name;
        director.age = params.age;
        director.save((err, directorStored) => {
            if (err)
                return res.status(500).send({ message: 'Internal Server error, Client doesn´t saved' });
            if (directorStored)
                res.status(200).send({ client: directorStored });
            else
                res.status(404).send({ message: 'Client not saved!' });
        });
    }
    else {
        res.status(400).send({ message: 'Send all data please' });
    }
});
exports.directorRouter.delete('/:id', (req, res) => {
    const dato = req.params.id;
    console.log(dato);
    Director.findByIdAndRemove(dato, (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Internal Server error, product doesn´t Deleted' });
        }
        if (result)
            res.status(200).send({ message: 'Si se borro' });
        else
            res.status(404).send({ message: 'Director no Borrado!' });
    });
});
exports.directorRouter.patch('/:id', (req, res) => {
    const elID = req.params.id;
    const params = req.body;
    Director.update({ _id: elID }, { $set: params }, (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Internal Server error, product doesn´t Deleted' });
        }
        if (result)
            res.status(200).send({ message: 'Si Actualizado' });
        else
            res.status(404).send({ message: 'Director no actualizado!' });
    });
});
//# sourceMappingURL=directorController.js.map