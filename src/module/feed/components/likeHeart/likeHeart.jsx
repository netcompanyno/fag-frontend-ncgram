import React from 'react';
import { Icon, Intent } from "@blueprintjs/core";
import uuid from 'uuid';

const LikeHeart = ({ id, statusList, addLike }) => {

    let iconList = [];

    // self running function
    (() => {
        const array_elements = statusList.statusList;

        if (array_elements === undefined || array_elements.length <= 0) {
            return iconList.push({ "HEART" : 0 })
        }

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

    })();

    return (
        <div className="display_flex margin-right-20px margin-bottom-20px">
            {iconList.map(item =>
                              <div key={uuid()} className="display_flex margin-right-10px">
                                  <Icon icon={Object.keys(item)[ 0 ].toLowerCase()}
                                        iconSize={30} className={'iconColor'}
                                        onClick={() => addLike(id, Object.keys(item)[ 0 ])} />
                                  <p className="margin-left-10px">{Object.values(item)}</p>
                              </div>
            )}
        </div>
    );
};

export default LikeHeart;
