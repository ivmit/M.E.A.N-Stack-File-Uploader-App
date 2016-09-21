/**
 * Created by imitrach on 9/21/2016.
 */

//Dependencies
var mongoose  = require('mongoose');
var Superhero = require('../models/superhero');

//App routes
module.exports = function() {

    return {

        //Get all heroes
        getAll: function(req, res) {
            //Query the DB and if no errors, send all the superheroes
            var query = Superhero.find({});
            query.exec(function(err, superheroes){
                if (err) res.send(err);
                //If no errors, send them back to the client
                res.json(superheroes);
            })

        },
        post: function (req, res) {

            //Create a new superhero
            var newSuperHero = new Superhero(req.body);

            //save it
            newSuperHero.save(function(err){
                if(err) res.send(err);

                //send it back to client
                res.json(req.body);

            });

        },
        getOne: function(req, res) {
            Superhero.findById(req.params.id, function(err, superhero){
                if(err) res.send(err);

                res.json(superhero);
            });
        }

    }

};