import React from 'react';
import PropTypes from 'prop-types';
import '../style/style.css';

const EksempelModule = ({ title, description, clickEvent }) => (
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


EksempelModule.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

EksempelModule.defaultProps = {
  title: '',
  description: '',
};

export default EksempelModule;