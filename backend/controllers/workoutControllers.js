const workoutModel = require("../models/workoutModel");
const mongoose = require("mongoose");

// Get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await workoutModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// Get one workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await workoutModel.findById(id);

  if (!workout) {
    return res.status(400).json({ error: "No such workout spotted" });
  }
  res.status(200).json(workout);
};

// Create new workout

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body; //what is destructing this is one of the most famous concept which is going to be used in all over the world.

  // Code to send error if input form fields are empty
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please file in all the fields", emptyFields });
  }

  try {
    const workout = await workoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.send("Hey ! i am post request");
};

// Delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await workoutModel.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "NO such workout" });
  }
  res.status(200).json(workout);
};

//// Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Workout" });
  }

  // const workout = await workoutModel.findByIdAndUpdate({ _id: id });
  // const workout = await workoutModel.findOneAndUpdate({ _id: id });
  const workout = await workoutModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "no workout found" });
  }

  res.status(200).json(workout);
};

/// exports

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
