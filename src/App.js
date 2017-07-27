import React, { Component } from 'react';
import './App.css';

import CourseList from './courses/containers/CourseList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Course Catalog</h2>
        </div>
        <div className="App-intro">
          <CourseList />
        </div>
      </div>
    );
  }
}

export default App;
