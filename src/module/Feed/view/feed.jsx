import React from 'react';
import PropTypes from 'prop-types';
import FeedContainer from "../container/feedContainer";


const Feed = ({ prop1, prop2 }) => (
    <span>
      <FeedContainer title={"Feed"} description={"Dette er en feed"}/>
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
