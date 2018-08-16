import axios from 'axios';
import {
    ADD_COMMENT,
    ADD_LIKE,
    FETCH_HAS_ERROR,
    ITEMS_IS_LOADING,
    RECEIVE_POSTS,
    UPDATE_COMMENT
} from '../types/feedTypes';

export const receivePosts = (firstList, restOfList) =>
    ({
        type : RECEIVE_POSTS,
        payload : {
            firstList : firstList,
            restOfList : restOfList
        }
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
    return (dispatch, getState) => {
        dispatch(itemsIsLoading(true));
        axios.get(url)
             .then((response) => {
                 const size = 50;
                 const data = response.data.slice(0, size);

                 const chunk = (arr, size) =>
                     arr.reduce((acc, _, i) =>
                                    (i % size)
                                    ? acc
                                    : [ ...acc, arr.slice(i, i + size) ]
                         , []);
                 const chunkedData = chunk(data, Math.round(data.length / 5));

                 const firstChunk = chunkedData[ 0 ];
                 chunkedData.shift();

                 dispatch(receivePosts(firstChunk, chunkedData));
             })
             .catch(error => dispatch(itemsHasError(true, error)))
             .then(function() {
                 dispatch(itemsIsLoading(false));
             });
    };
};

export const goToNext = () => ({
    type : 'GET_NEXT_INDEX',
});

function pagination(c, m) {
    let current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

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
