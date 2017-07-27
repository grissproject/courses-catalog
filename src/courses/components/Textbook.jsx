import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextbookEditForm from './TextbookEditForm.jsx';

class Textbook extends Component {
  render() {
    return (
      <div className="Textbook-container">
        {this.props.title} <i>by</i> <strong>{this.props.author} </strong>

        {this.props.showEditForms && (
          <TextbookEditForm {...this.props} />
        )}
      </div>
    )
  }
}

Textbook.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  showEditForms: PropTypes.bool,
}

export default Textbook;
