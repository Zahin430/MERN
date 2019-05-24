import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
// import ExerciseList from './components/exerciseList.component';
// import EditExercise from './components/editExercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <div className="container">
    <Router>
    <div>
      <Navbar />
      <br/>
      <Route path = "/create"  component = {CreateExercise} />
      <Route path = "/user"  component = {CreateUser} /> 
      {/* <Route path = "/" exact component = {ExerciseList} />
      <Route path = "/edit/:id"  component = {EditExercise} />
      <Route path = "/user"  component = {CreateUser} /> */}
    </div>
    </Router>
    </div>
  );
}

export default App;
