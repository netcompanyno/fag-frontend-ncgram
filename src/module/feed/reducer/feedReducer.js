import {
    RECEIVE_POSTS,
    ITEMS_IS_LOADING,
    FETCH_HAS_ERROR,
    ADD_LIKE,
    ADD_COMMENT,
    UPDATE_COMMENT
} from "../types/feedTypes";

const defaultState = {
    test : 'test',
    isLoading : false,
    hasError : false,
    commentHolder : "",
    posts : [
        {
            id : 991,
            title : "",
            content : "Nå kjører vi, håper igjen er igjen som skulle vært med på bussen!",
            sender : "auduns",
            imageUrl : "",
            timestamp : "2018-04-28T12:33:36+0000",
            statusList : [],
            comments : [
                {
                    shortName : "daniels",
                    comment : "blablabla"
                }
            ]
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
                } ],
            comments : [
                {
                    shortName : "daniels",
                    comment : "blablabla"
                }
            ]
        },
    ],
};

const getPost = (state, id) => state.posts.find(el => el.id === id);

const insertIntoPost = (postsInState, postToInsert) => {
    let copyOfPosts = [...postsInState];

    copyOfPosts.forEach((element, index) => {
        if (element.id === postToInsert.id) {
            copyOfPosts[ index ] = postToInsert;
        }
    });
    return copyOfPosts;
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
                    hasError : action.hasError,
                    errorMessage : action.error
                }
            }

            case RECEIVE_POSTS: {
                console.log("json payload", action.payload)
                return {
                    ...state,
                    posts : action.payload
                }
            }

            case ADD_COMMENT: {
                let post = getPost(state, action.id);
                const shortName = "username";
                let copyOfPost = {...post};
                console.log('copyOfPost', copyOfPost);
                'comments' in copyOfPost ?
                copyOfPost.comments = [...copyOfPost.comments,{ shortName : shortName, comment : state.commentHolder }] :
                    copyOfPost[ 'comments' ] = [ { shortName : "username", comment : state.commentHolder } ];
                const updatedPosts = insertIntoPost(state.posts, copyOfPost);

                return {
                    ...state,
                    posts : [
                        ...updatedPosts
                    ]
                }
            }

            case
            ADD_LIKE: {
                const test = {...getPost(state, action.id)};

                test.statusList = [...test.statusList, {
                        messageId : 546,
                        person : {
                            fullName : "Thomas Pettersen",
                            shortName : "thomasp",
                            profileImageUrl : "https://s3-eu-west-1.amazonaws.com/faghelg/thomasp.png"
                        },
                        statusType : action.icon
                    }];

                // console.log("action.id", action.id);
                // console.log(test);

                const updatedPosts = insertIntoPost(state.posts, test);

                return {
                    ...state,
                    posts : [
                        ...updatedPosts

                    ]
                }
            }

            case UPDATE_COMMENT : {
                return {
                    ...state,
                    commentHolder : action.payload
                }
            }

            default:
                return state;
        }
    }
;

export default feedReducer;
