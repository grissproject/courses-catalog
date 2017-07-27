import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextbookEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      author: this.props.author,
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

    this.props.onSubmitTextbook(this.props.index, {
      title: this.state.title,
      author: this.state.author,
    });
  }

  handleDiscard() {
    this.setState({
      title: this.props.title,
      author: this.props.author,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Author:
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
        </label>

        <input type="button" value="Discard" onClick={this.handleDiscard} />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

TextbookEditForm.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onSubmitTextbook: PropTypes.func,
}

export default TextbookEditForm;
