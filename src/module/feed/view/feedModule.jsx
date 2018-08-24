import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import InfiniteScroll from "react-infinite-scroll-component";
import CardItemContainer from "../container/cardItemContainer";

const feedModule = ({ ...props }) => (
    <span>
        <InfiniteScroll
            className={'infinite-scroll-styling'}
            dataLength={props.posts.length}
            next={props.goToNextIndex}
            hasMore={props.hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign : "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
        {props.posts.map((item) =>
                             <CardItemContainer key={uuid()}
                                                itemData={item}
                             />
        )}
        </InfiniteScroll>
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
