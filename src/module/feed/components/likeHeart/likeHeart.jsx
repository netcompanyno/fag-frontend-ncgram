import React from 'react';
import { Icon, Intent } from "@blueprintjs/core";
import uuid from 'uuid';

const LikeHeart = ({ id, statusList, addLike }) => {

    let iconList = [];

    // self running function
    (() => {
        let array_elements = statusList;

        if (statusList.length <= 0) {
            return iconList.push({ "HEART" : 0 })
        }

        // array_elements.sort();

        let current = null;
        let cnt = 0;
        for (let i = 0; i < array_elements.length; i++) {
            if (array_elements[ i ].statusType !== current) {
                if (cnt > 0) {
                    iconList.push({ [ current ] : cnt });
                }
                current = array_elements[ i ].statusType;
                cnt = 1;
            } else {
                cnt++;
            }
        }
        if (cnt > 0) {
            iconList.push({ [ current ] : cnt });
        }
        console.log(iconList)

    })();

    //
    // console.log("reducer", count());
    // console.log(Object.keys(iconList));
    //
    // iconList.map(item => console.log("kek", item));
    //
    // Object.keys(iconList).map(item => {
    //     console.log("item", item.toLowerCase())
    // });

    return (
        <div className="display_flex margin-right-20px margin-bottom-20px">
            {iconList.map(item =>
                              <div key={uuid()} className="display_flex margin-right-10px">
                                  <Icon icon={Object.keys(item)[ 0 ].toLowerCase()}
                                        iconSize={30} intent={Intent.DANGER}
                                        onClick={() => addLike(id, Object.keys(item)[ 0 ])} />
                                  <p className="margin-left-10px">{Object.values(item)}</p>
                              </div>
            )}
        </div>
    );
};

export default LikeHeart;
