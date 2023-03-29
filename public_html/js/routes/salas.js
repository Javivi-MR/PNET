'use strict';

const express = require('express');
const router = express.Router();
const salasService = require('./salas-service');

router.get('/', function (req, res) {
    salasService.getAll((err, salas) => {
            if (err) {
                res.status(500).send({
                    msg: err
                });
            } else if (salas.length == 0){
            	res.status(500).send({
                    msg: "salas null"
                });
            } else {
                res.status(200).send(salas);
            }
        }
    );
});

router.post('/', function (req, res) {
    let salas = req.body;
    salasService.add(salas, (err, salas) => {
            if (err) {
                res.status(500).send({
                    msg: err
                });
            } else if (salas.length != 0){
                res.status(201).send({
                    msg: 'salas created!'
                });
            }
        }
    );
});


router.delete('/', function (req, res) {
    salasService.removeAll((err) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else {
            res.status(200).send({
                msg: 'salas deleted!'
            });
        }
    });
});


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

//function for delete all salas
router.delete('/', function (req, res) {
    salasService.removeAll((err) => {
        if (err) {
            res.status(500).send({
                msg: err
            });
        } else {
            res.status(200).send({
                msg: 'salas deleted!'
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