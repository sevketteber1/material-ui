import React, { Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store.js";

export default class App extends React.Component {
  state = {
    exercises
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercises]
          : [exercise];

        return exercises;
      }, {})
    );
  }
  render() {
    const exercises = this.getExercisesByMuscles();
    return (
      <Fragment>
        <Header />

        <Exercises exercises={exercises} />

        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
