'use strict';

const express = require('express');
const router = express.Router();
const salasService = require('./salas-service');

//Crear una nueva sala
router.post('/', function (req, res) {
    let salas = req.body;
    salasService.add(salas, (err, salas) => {
            if (err) {
                res.status(500).send({
                    msg: err
                });
            } else if (salas.length != 0){
                res.status(201).send({
                    msg: 'Se ha creado la sala'
                });
            }
        }
    );
});

//Recoger todas las salas
router.get('/', function (req, res) {
    salasService.getAll((err, salas) => {
            if (err) {
                res.status(500).send({
                    msg: err
                });
            } else if (salas.length == 0){
            	res.status(500).send({
                    msg: "No existe ninguna sala"
                });
            } else {
                res.status(200).send(salas);
            }
        }
    );
});

//Recoger una sala especifica
router.get('/:_id', function (req, res) {
    let _id = req.params._id;
    salasService.get(_id, (err, salas) => {
            if (err) {
                res.status(500).send({
                	msg: err
            	});
            } else if (salas.length == 0){
            	res.status(500).send({
                    msg: "salas is null"
                });
            } else {
                res.status(200).send(salas);
            }
        }
    );
});

//Actualizar una sala especifica
router.put('/:_id', function (req, res) {
    const _id = req.params._id;
    const updatedsalas = req.body;
    salasService.update(_id, updatedsalas, (err, numUpdates) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
	} else if(numUpdates.modifiedCount === 0) {
            res.status(500).send({
                msg: "Not updated"
            });
        } else {
            res.status(200).send({
                msg: 'Salas updated!'
            });
        }
    });
});

//Eliminar una sala especifica
router.delete('/:_id', function (req, res) {
    let _id = req.params._id;
    salasService.remove(_id, (err) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else {
            res.status(200).send({
                msg: 'Sala deleted!'
            });
        }
    });
});

//Eliminar todas las salas
router.delete('/', function (req, res) {
    salasService.removeAll((err) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else {
            res.status(200).send({
                msg: 'Se han eliminado todas las salas'
            });
        }
    });
});

/* COMPLETAR:
router.delete('COMPLETAR', function (req, res) {
    let _id = COMPLETAR;
    moviesService.COMPLETAR(_id, (err) => {
       COMPLETAR
    });
});*/

module.exports = router;