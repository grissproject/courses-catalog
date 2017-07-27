import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateCourse, updateCourseTextbook, toggleShowEditForms } from '../../actions/actions';
import Textbook from './Textbook.jsx';
import CourseEditForm from './CourseEditForm.jsx';

class Course extends Component {
  render() {
    return (
      <section className="Course-container">
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>

        {this.props.showEditForms && (
          <CourseEditForm
            id={this.props.id}
            name={this.props.name}
            description={this.props.description}
            onSubmitCourse={this.props.onSubmitCourse}
          />
        )}

        <h3>Texbooks</h3>
        {this.props.textbooks.map((textbook, index) =>
          <Textbook
            key={index}
            index={index}
            showEditForms={this.props.showEditForms}
            onSubmitTextbook={this.props.onSubmitTextbook}
            {...textbook}
          />
        )}

        <button
          onClick={e => {
            this.props.onClickToggleEdit()
          }}
        >{this.props.showEditForms ? 'Hide Edit' : 'Edit'}</button>
      </section>
    );
  }
}

Course.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  textbooks: PropTypes.array,
  showEditForms: PropTypes.bool,
  onSubmitTextbook: PropTypes.func,
  onSubmitCourse: PropTypes.func,
  onClickToggleEdit: PropTypes.func,
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmitCourse: (courseInfo) => {
      dispatch(updateCourse(courseInfo));
    },
    onSubmitTextbook: (index, textbook) => {
      dispatch(updateCourseTextbook(props.id, index, textbook));
    },
    onClickToggleEdit: () => {
      dispatch(toggleShowEditForms(props.id));
    }
  }
}

export default connect(null, mapDispatchToProps)(Course);
