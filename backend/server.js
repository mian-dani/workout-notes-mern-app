require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

mongoose
  // .connect("mongodb://localhost:27017/MERN_Project")
  .connect("mongodb://127.0.0.1:27017/MERN_Project")
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Your Database is connected & server is running on port ",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
