import { BUTTON_PRESS, RECEIVE_POSTS, ITEMS_IS_LOADING, FETCH_HAS_ERROR } from "../types/feedTypes";

const defaultState = {
    test : 'test',
    isLoading : false,
    hasError : false,
    posts : [
        {
            id : 991,
            title : "",
            content : "Nå kjører vi, håper igjen er igjen som skulle vært med på bussen!",
            sender : "auduns",
            imageUrl : "",
            timestamp : "2018-04-28T12:33:36+0000",
            statusList : []
        },
        {
            id : 992,
            title : "",
            content : "#done ",
            sender : "vegarf",
            imageUrl : "https://s3-eu-west-1.amazonaws.com/faghelg/aaa_image_d82cffbb-40b3-480a-9928-97ac30f89e22.png",
            timestamp : "2018-04-28T12:26:31+0000",
            statusList : [
                {
                    messageId : 564,
                    person : {
                        fullName : "Daniel Engen Sandén",
                        shortName : "daniels",
                        profileImageUrl : "https://s3-eu-west-1.amazonaws.com/faghelg/daniels.png"
                    },
                    statusType : "HEART"
                },
                {
                    messageId : 564,
                    person : {
                        fullName : "Thomas Pettersen",
                        shortName : "thomasp",
                        profileImageUrl : "https://s3-eu-west-1.amazonaws.com/faghelg/thomasp.png"
                    },
                    statusType : "HEART"
                },
                {
                    messageId : 564,
                    person : {
                        fullName : "Thomas Pettersen",
                        hortName : "thomasp",
                        profileImageUrl : "https://s3-eu-west-1.amazonaws.com/faghelg/thomasp.png"
                    },
                    statusType : "STAR"
                } ]
        },
    ],
};

const feedReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ITEMS_IS_LOADING: {
            return {
                ...state,
                isLoading : action.isLoading
            }
        }

        case FETCH_HAS_ERROR: {
            return {
                ...state,
                hasError : action.hasError
            }
        }

        case BUTTON_PRESS: {
            alert("State har nå oppdatert seg");
            return {
                ...state,
                nyStateProp : "hei sveis"
            }
        }
        case RECEIVE_POSTS: {
            console.log("kek");
            return {
                ...state,
                posts : action.payload
            }
        }

        default:
            return state;
    }
};

export default feedReducer;
