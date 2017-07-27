import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CourseEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      description: this.props.description,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmitCourse({
      id: this.props.id,
      name: this.state.name,
      description: this.state.description,
    });
  }

  handleDiscard() {
    this.setState({
      name: this.props.name,
      description: this.props.description,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>

        <input type="button" value="Discard" onClick={this.handleDiscard} />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

CourseEditForm.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  onSubmitCourse: PropTypes.func,
}

export default CourseEditForm;
