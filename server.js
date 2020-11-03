const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs")


const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fittnesdb", { useNewUrlParser: true });

// db.workoutPlan.create({name:`test`})
//     .then(dbworkoutPlan => {
//         console.log(dbworkoutPlan);
//     }).catch(({message}) => {
//         console.log(message);
//     });

    // app.post("/submit/exercise", ({body}, res) => {
    //     db.exercise.create(body)
    //       .then(({_id}) => db.workoutPlan.findOneAndUpdate({}, { $push: { exercise: _id } }, { new: true }))
    //       .then(dbworkoutPlan => {
    //         res.json(dbworkoutPlan);
    //       })
    //       .catch(err => {
    //         res.json(err);
    //       });
    //   });

    
    app.post("/submit", ({body}, res) => {
        db.workoutPlan.create(body)
          .then(dbworkoutPlan => {
            res.json(dbworkoutPlan);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.get("/exercises", (req, res) => {
        db.exercise.find({})
          .then(dbexercise  => {
            res.json(dbexercise);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.get("/exercises/:id", (req, res) => {
        db.exercise.find({})
          .then(dbexercise  => {
            res.json(dbexercise);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.get("/workoutplan", (req, res) => {
        db.workoutPlan.find({})
          .then(dbworkoutPlan => {
            res.json(dbworkoutPlan);
          })
          .catch(err => {
            res.json(err);
          });
      });

      app.post("/submit/:id", (req, res) => {
        const exerciseInformation = {
            name: req.body.name,
            duration: req.body.duration,
            weight: req.body.weight,
            type: req.body.type,
            reps: req.body.reps,
            sets: req.body.sets,
            distance: req.body.distance
        };
        db.exercise.create(exerciseInformation)
          .then(({ _id }) => db.workout.findOneAndUpdate({_id: mongojs.ObjectId(req.params.id)}, { $push: { exercises: _id } }, { new: true }))
          .then(dbUser => {
            res.json(dbUser);
          })
          .catch(err => {
            res.json(err);
          });
    });

      app.get("/populated/:id", (req, res) => {
        db.workoutPlan.findOne({_id: mongojs.ObjectId(req.params.id)})
          .populate("exercise")
          .then(dbworkoutPlan => {
            console.log(dbworkoutPlan);
          })
          .catch(err => {
            res.json(err);
          });
      });
  
      app.get("/populated", (req, res) => {
        db.workoutPlan.find({})
          .populate("exercise")
          .then(dbLibrary => {
            res.json(dbLibrary);
          })
          .catch(err => {
            res.json(err);
          });
      });

    app.listen(PORT, () => {
        console.log(`App running on https:/localhost:${PORT}`);
    });