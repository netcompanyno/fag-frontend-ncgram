import React from 'react';
import PropTypes from 'prop-types';
import '../style/style.scss';
import Image from "../components/image/image";
import LikeHeart from "../components/likeHeart/likeHeart";

const feedModule = ({ title, description, clickEvent }) => (
  <div className="card">
    <div className="container">
      <span>
        <h4><b>{title}</b></h4>
        <Image />
        <p>{description}</p>
        <LikeHeart />
        <button type="button" onClick={clickEvent}>Click Me!</button>
      </span>
    </div>
  </div>
);


feedModule.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

feedModule.defaultProps = {
  title: '',
  description: '',
};

export default feedModule;
