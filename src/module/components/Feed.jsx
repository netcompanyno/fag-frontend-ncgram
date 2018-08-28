import React from 'react';
import PropTypes from 'prop-types';
import '../style/style.scss';

const Feed = ({ title, description, clickEvent }) => (
  <div className="card">
    <div className="container">
      <span>
        <h4><b>{title}</b></h4>
        <p>{description}</p>
        <button type="button" onClick={clickEvent}>Click Me!</button>
      </span>
    </div>
  </div>
);


Feed.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Feed.defaultProps = {
  title: '',
  description: '',
};

export default Feed;