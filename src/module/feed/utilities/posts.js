export const getPost = (state, id) => {
    let postFound = {};

        state.posts.forEach(el => {
            if (el.id === id) {
                postFound = el;
            }
        });
    return postFound
};

export const insertIntoPost = (postsInState, postToInsert) => {
    let copyOfPosts = [ ...postsInState ];

    return copyOfPosts.map(item => {
        if (item.id !== postToInsert.id) {
                return item;
            }

            return {
                ...item,
                ...postToInsert
            }
        });
};
