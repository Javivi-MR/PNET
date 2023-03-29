'use strict';
const MongoClient = require('mongodb').MongoClient;
let db;
let ObjectId = require('mongodb').ObjectId;
const Salas = function () {
};
Salas.prototype.connectDb = function (callback) {
    MongoClient.connect("mongodb+srv://Test_PNET:PNET_2022_2023_Pedro@fjmr-pnet-2022-2023.ndwi6hs.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true},
    function (err, database) {
        if (err) {
            console.log(err);
            callback(err);
        }
        db=database.db('fjmr-pnet-2022-2023').collection('salas');
        console.log("Conexión correcta");
        callback(err, database);
    });
};

Salas.prototype.add = function (salas, callback) {
    return db.insertOne(salas, callback);
};
    
Salas.prototype.get = function (_id, callback) {
    return db.find({_id: ObjectId(_id)}).toArray(callback);
};

Salas.prototype.getAll = function (callback) {
    return db.find({}).toArray(callback);
};

Salas.prototype.update = function (_id, updatedSala, callback) {
    delete updatedSala._id;
    return db.updateOne(
    {_id: ObjectId(_id)}, {$set: updatedSala}, callback);
};

Salas.prototype.remove = function (_id, callback) {
    return db.deleteOne({_id: ObjectId(_id)}, callback);
};

Salas.prototype.removeAll = function (callback) {
    return db.deleteMany({}, callback);
};
    
module.exports = new Salas(); 