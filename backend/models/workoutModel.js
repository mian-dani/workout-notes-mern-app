const mongoose = require("mongoose");

const schema = mongoose.Schema;

const workoutSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const mod1 = mongoose.model("myModel", workoutSchema);

//module.exports = mongoose.model("Workout", workoutSchema);
module.exports = mod1;
