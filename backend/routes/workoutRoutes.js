const express = require("express");
const workoutModel = require("../models/workoutModel");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

// router
//   .route("/test")
//   .get((req, res) => {
//     res.send("Hey! I am get request so far");
//   })
//   .post(createWorkout)
//   .delete((req, res) => {
//     res.send("hey thois is delete request");
//   });

module.exports = router;
