import React, { Component } from 'react';
import { connect } from 'react-redux';

import Course from '../components/Course.jsx';

class CourseList extends Component {
  render() {
    return (
      <section>
        {this.props.courses.map(course =>
          <Course
            key={course.id}
            {...course}
          />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses,
  };
};

export default connect(mapStateToProps)(CourseList);
