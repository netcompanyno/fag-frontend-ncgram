import React from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from "./container/headerContainer";


const Header = ({ prop1, prop2 }) =>
  (
    <span>
      <HeaderContainer />
    </span>
  );

Header.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.number,
};

Header.defaultProps = {
  title: '',
  description: '',
};

export default Header;
