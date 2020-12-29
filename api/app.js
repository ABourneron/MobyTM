const express = require('express')
var cors = require('cors')

const app = express()
const port = 3000
var mongo = require('mongodb')

var MongoClient = require('mongodb').MongoClient;
var url = process.env.URL_MONGO;
//var url = "mongodb://mongo:27080/";
console.log(url);

var dbName = "mobyWeb";
var collectionName = "mobs";

app.use(express.static('static'));
app.use(express.json());

app.use(cors());

//Page d'accueil
app.get('/', async (req, res) => {
  res.status(200).json({
      name   : 'API', 
      version: '1.0', 
      status : 200, 
      message: 'Bienvenue sur l\'API !'
  });
});

//Récuperation de toutes les mobs
app.get('/api/mobs', function (req, res) {
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection(collectionName).find({}).toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
})

//Récuperation d'une mobs en particulier
app.get('/api/mob/:id', function (req, res) {
  var varID = mongo.ObjectID(req.params.id)
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection(collectionName).find({ _id: varID }).toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
})
/*
//Ajout d'une personne
app.post('/api/personnes', function (req, res) {
  //var json_response = req.body;   //On récupere directement le JSON du body
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");

    dbo.collection("personne").insertOne(req.body, function (err) {
      if (err) throw err;
      res.send(req.body);
      db.close();
    });
  });
})

//Suppresion d'une personne
app.delete('/api/personnes/:id', function (req, res) {
  var varID = mongo.ObjectID(req.params.id)
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");

    dbo.collection("personne").deleteOne({ _id: varID }, function (err) {
      if (err) throw err;
      console.log("1 delete");
      db.close();
    });
  });
})

//MAJ d'une personne en particulier
app.put('/api/personnes/:id', function (req, res) {
  var varID = mongo.ObjectID(req.params.id)
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var myobj = {
      $set: {
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        sexe: req.body.sexe
      }
    };

    dbo.collection("personne").updateOne({ _id: varID }, myobj, (function (err, result) {
      if (err) throw err;
      res.send(result);
      console.log("1 document updated");
      db.close();
    }));
  });
})*/

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`)
})
