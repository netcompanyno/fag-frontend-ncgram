import React from 'react';
import PropTypes from 'prop-types';
import uuid from "uuid";
import { Button, Card, Classes, Elevation, Icon, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import Image from "../image/image";
import LikeHeart from "../likeHeart/likeHeart";

const CardItem = ({ ...props, itemData }) => (
    <span>
        <Card key={uuid()} i={itemData.id} className="card" interactive={false} elevation={Elevation.FOUR}>
        <Image imgSrc={itemData.imageUrl} loading={props.loading} />
        <h4 className={props.loading ? Classes.SKELETON : undefined}>{itemData.sender}: {itemData.content}</h4>
            {itemData.comments &&
             itemData.comments.map(post =>
                                       <span key={uuid()} className="display_flex">
                <p className={props.loading ? Classes.SKELETON : undefined}>
                    <b>{post.shortName}:</b> {post.comment}</p>
            </span>)}
            <span className={`display_flex flex_justify_space ${props.loading && Classes.SKELETON}`}>
                <LikeHeart className={props.loading ? Classes.SKELETON : undefined}
                           id={itemData.id}
                           statusList={itemData}
                           addLike={props.addLike}
                           hoverOverIconBool={props.overOverIcon}
                           hoverOverThatIcon={props.hoverOverThatIcon}/>
                <Popover interactionKind={PopoverInteractionKind.CLICK}
                         popoverClassName="bp3-popover-content-sizing"
                         position={Position.TOP_RIGHT}
                >
                <Icon icon={"chat"} iconSize={30} className={'comment_btn_colour'} />
                <div>
                    <h5>Kommentar</h5>
                    <input type="text"
                           className="bp3-input"
                           placeholder="comment..."
                           onChange={(e) => props.updateComment(e.target.value)} />
                    <Button className="bp3-popover-dismiss" onClick={() => props.addComment(itemData.id)}>Add</Button>
                </div>
            </Popover>
        </span>
    </Card>
    </span>
);

CardItem.propTypes = {
    itemData : PropTypes.any,
    loading : PropTypes.bool,
    fetchData : PropTypes.func,
    addLike : PropTypes.func,
    addComment : PropTypes.func,
    updateComment : PropTypes.func,
};

CardItem.defaultProps = {
    itemData : {},
    loading : false,
    fetchData : undefined,
    addLike : undefined,
    addComment : undefined,
    updateComment : undefined,
};

export default CardItem;
