import { BUTTON_PRESS, RECEIVE_POSTS, ITEMS_IS_LOADING, FETCH_HAS_ERROR } from '../types/feedTypes';

export const addNewMovie = () =>
    ({
        type : BUTTON_PRESS,
    });

function receivePosts(json) {
    return {
        type : RECEIVE_POSTS,
        payload : json.data.children.map(child => child.data),
        receivedAt : Date.now()
    }
}

export const fetchAllPosts = (dispatch) => {
    fetch("https://faghelg.herokuapp.com/messages")
        .then(response => response.json())
        .then(json => dispatch(receivePosts(json)))
};

export function itemsHasError(bool) {
    return {
        type : FETCH_HAS_ERROR,
        hasError : bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type : ITEMS_IS_LOADING,
        isLoading : bool
    };
}

export function fetchMessagesData() {
    const url = "https://faghelg.herokuapp.com/messages";
    return (dispatch) => {
        console.log("dispatch start")
        dispatch(itemsIsLoading(true));
        fetch(url, {
            method : 'GET',
            headers : {
               credentials: 'include',
            }})
            .then((response) => {
                console.log(response)

                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(receivePosts(items)))
            .catch(() => dispatch(itemsHasError(true)));
    };
}

// export function fetchOffers() {
//   return function action(dispatch) {
//     dispatch({ type: FETCH_OFFERS })
//
//     const request = axios({
//       method: 'GET',
//       url: `${BASE_URL}/offers`,
//       headers: []
//     });
//
//     return request.then(
//       response => dispatch(fetchOffersSuccess(response)),
//       err => dispatch(fetchOffersError(err))
//     );
//   }
// }
