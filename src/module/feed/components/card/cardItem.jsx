import React from 'react';
import uuid from "uuid";
import { Button, Card, Classes, Elevation, Icon, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import Image from "../image/image";
import LikeHeart from "../likeHeart/likeHeart";
import { Intent } from "@blueprintjs/core/lib/esm/index";

const CardItem = ({ itemData, loading, fetchData, addLike, addComment, updateComment }) => (
    <Card i={itemData.id} className="card" interactive={false} elevation={Elevation.FOUR}>
        {/*<h2 className={loading && Classes.SKELETON}><b>{itemData.title}</b></h2>*/}
        {/*<span className={loading && Classes.SKELETON}>*/}
        <Image imgSrc={itemData.imageUrl} loading={loading} />
        {/*</span>*/}
        <h4 className={loading ? Classes.SKELETON : undefined}>{itemData.sender}: {itemData.content}</h4>
        {itemData.comments && itemData.comments.map(post =>
                                                        <span key={uuid()} className="display_flex">
                                                            <p className={loading ? Classes.SKELETON : undefined}>
                                                                <b>{post.shortName}:</b> {post.comment}</p>
                                                        </span>)}
        <span className={`display_flex flex_justify_space ${loading && Classes.SKELETON}`}>
                <LikeHeart className={loading ? Classes.SKELETON : undefined}
                           id={itemData.id}
                           statusList={itemData.statusList}
                           addLike={addLike} />
                <Popover
                    interactionKind={PopoverInteractionKind.CLICK}
                    popoverClassName="bp3-popover-content-sizing"
                    position={Position.TOP_RIGHT}
                >
                <Icon icon={"chat"} iconSize={30} intent={Intent.PRIMARY} />
                <div>
                    <h5>Kommentar</h5>
                    <input type="text"
                           className="bp3-input"
                           placeholder="comment..."
                           onChange={(e) => updateComment(e.target.value)} />
                    <Button className="bp3-popover-dismiss" onClick={() => addComment(itemData.id)}>Add</Button>
                </div>
            </Popover>
        </span>
    </Card>
);

export default CardItem;
