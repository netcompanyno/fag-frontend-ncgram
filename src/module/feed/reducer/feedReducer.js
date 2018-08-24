import Cookies from "js-cookie";
import {
    RECEIVE_POSTS,
    ITEMS_IS_LOADING,
    FETCH_HAS_ERROR,
    ADD_LIKE,
    ADD_COMMENT,
    UPDATE_COMMENT,
    GET_NEXT_INDEX,
    HOVER_THAT_ICON
} from "../types/feedTypes";
import { getPost, insertIntoPost } from "../utilities/posts";

const defaultState = {
    test : 'test',
    isLoading : false,
    hasError : false,
    commentHolder : "",
    index : 0,
    hasMore: true,
    hoverOverIcon: false,
    posts : [
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
                        shortName : "thomasp",
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
        }
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
                    hasError : action.hasError,
                    errorMessage : action.error
                }
            }

            case RECEIVE_POSTS: {
                return {
                    ...state,
                    posts : action.payload.firstList,
                    restOfList: action.payload.restOfList
                }
            }

            case ADD_COMMENT: {
                let post = getPost(state, action.id);
                const shortName = "username";
                let copyOfPost = { ...post };
                'comments' in copyOfPost ?
                copyOfPost.comments = [ ...copyOfPost.comments, { shortName : shortName, comment : state.commentHolder } ] :
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
                const test = { ...getPost(state, action.id) };
                console.log(Cookies.get('username'));
                test.statusList = [ ...test.statusList, {
                    messageId : 546,
                    person : {
                        fullName : "Thomas Pettersen",
                        shortName : Cookies.get('username'),
                        profileImageUrl : "https://s3-eu-west-1.amazonaws.com/faghelg/thomasp.png"
                    },
                    statusType : action.icon
                } ];

                const kek = state.posts.map(item => {
                    return item.statusList.map(item2 => {
                        return item2.person.shortName === Cookies.get('username')
                    })
                });

                console.log(kek);

                const updatedPosts = insertIntoPost(state.posts, test);
                return {
                    ...state,
                    posts : [
                        ...updatedPosts

                    ]
                }
            }

            case GET_NEXT_INDEX: {
                return {
                    ...state,
                    index : (state.index + 1) % state.posts.length,
                    posts: [...state.posts, ...state.restOfList[0]],
                    restOfList: [...state.restOfList.slice(1)],
                    hasMore: state.restOfList.length > 1
                };
            }

            case UPDATE_COMMENT : {
                return {
                    ...state,
                    commentHolder : action.payload
                }
            }

            case HOVER_THAT_ICON: {
                return {
                    ...state,
                    hoverOverIcon: !state.hoverOverIcon
                }
            }

            default:
                return state;
        }
    }
;

export default feedReducer;
