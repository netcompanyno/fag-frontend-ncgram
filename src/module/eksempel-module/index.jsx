import React from 'react';
import PropTypes from 'prop-types';
import EksempelContainer from "./container/eksempelContainer";


const EksempelModule = ({ prop1, prop2 }) =>
  (
    <span>
      <EksempelContainer title={"Test"} description={"Test test"}/>
    </span>
  );

EksempelModule.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.number,
};

EksempelModule.defaultProps = {
  title: '',
  description: '',
};

export default EksempelModule;
