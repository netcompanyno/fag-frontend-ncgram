import React from 'react';
import PropTypes from 'prop-types';
import FeedContainer from "./container/feedContainer";


const Feed = ({ prop1, prop2 }) =>
  (
    <span>
      <FeedContainer title={"Test"} description={"Test test"}/>
    </span>
  );

Feed.propTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.number,
};

Feed.defaultProps = {
  title: '',
  description: '',
};

export default Feed;