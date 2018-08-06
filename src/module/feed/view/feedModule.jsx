import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import '../style/style.scss';
import CardItem from "../components/card/cardItem";

const feedModule = ({ title, description, clickEvent, fetchData, posts }) => {
    console.log(posts);
    return (
        <span>
        {posts.map((item) => <CardItem key={uuid()}
                                          title={item.title}
                                          description={item.content}
                                          imgSrc={item.imageUrl}
                                          fetchData={fetchData} />)}
        </span>
    );
};

feedModule.propTypes = {
    title : PropTypes.string,
    description : PropTypes.string,
};

feedModule.defaultProps = {
    title : '',
    description : '',
};

export default feedModule;
