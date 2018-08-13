import React from 'react';
import PropTypes from 'prop-types';
import Roll from 'react-reveal';
import { Button } from "@blueprintjs/core";
import uuid from 'uuid';
import '../style/style.scss';
import CardItem from "../components/card/cardItem";

const feedModule = ({ ...props }) => (
    <span>
        <Button intent="primary" onClick={props.fetchData} text="Load posts from api!" className="margin-bottom-20px" />
        {console.log(props.loading)}
        {props.posts.map((item) =>
                             <CardItem itemData={item}
                                       loading={props.loading}
                                       addLike={props.addLike}
                                       fetchData={props.fetchData}
                                       addComment={props.addComment}
                                       updateComment={props.updateComment} />
        )}

    </span>
);

feedModule.propTypes = {
    title : PropTypes.string,
    description : PropTypes.string,
};

feedModule.defaultProps = {
    title : '',
    description : '',
};

export default feedModule;
