import { connect } from 'react-redux';
import feedModule from '../view/feedModule';
import { fetchAllPosts, fetchMessagesData, addLike, addComment, updateComment } from '../actions/feedAction';

const mapStateToProps = (state, ownProps) => ({
    loading: state.feedReducer.isLoading,
    title : ownProps.title,
    description : ownProps.description,
    posts: state.feedReducer.posts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData : () => dispatch(fetchMessagesData()),
    addLike : (id, icon) => dispatch(addLike(id, icon)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    addComment: (id) => dispatch(addComment(id))

});

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(feedModule);

export default FeedContainer;
