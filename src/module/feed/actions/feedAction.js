import axios from 'axios';
import {
    ADD_COMMENT,
    ADD_LIKE,
    FETCH_HAS_ERROR,
    ITEMS_IS_LOADING,
    RECEIVE_POSTS,
    UPDATE_COMMENT
} from '../types/feedTypes';

export const receivePosts = json =>
    ({
        type : RECEIVE_POSTS,
        payload : json
    });

export const addLike = (id, icon) =>
    ({
        type : ADD_LIKE,
        id : id,
        icon : icon
    });

export const itemsHasError = (bool, error) =>
    ({
        type : FETCH_HAS_ERROR,
        hasError : bool,
        error : error
    });

export const itemsIsLoading = (bool) => {
    return {
        type : ITEMS_IS_LOADING,
        isLoading : bool
    };
};

export const updateComment = (comment) =>
    ({
        type : UPDATE_COMMENT,
        payload : comment
    });

export const addComment = (id) =>
    ({
        type : ADD_COMMENT,
        id : id
    });

export const fetchAllPosts = (dispatch) => {
    axios.get("https://faghelg.herokuapp.com/messages")
         .then(response => response.json())
         .then(json => dispatch(receivePosts(json)))
};

export const fetchMessagesData = () => {
    const url = "https://faghelg.herokuapp.com/messages";
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        axios.get(url)
             .then((response) => {
                 const size = 20;
                 const data = response.data.slice(0, size);
                 console.log("data", pagination(3, data));

                 dispatch(receivePosts(data));
             })
             .catch(error => dispatch(itemsHasError(true, error)))
             .then(function() {
                 dispatch(itemsIsLoading(false));
             });
    };
};

function pagination(c, m) {
    let current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    console.log("last",last);
    for (let i = 1; i <= last; i++) {
        if (i === 1 || i === last || (i >= left && i < right)) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }
    return rangeWithDots;
}
