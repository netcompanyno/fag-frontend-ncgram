import { connect } from 'react-redux';
import feedModule from '../view/feedModule';
import { fetchMessagesData, addLike, addComment, updateComment, goToNext } from '../actions/feedAction';

const mapStateToProps = (state, ownProps) => ({
    loading: state.feedReducer.isLoading,
    title : ownProps.title,
    description : ownProps.description,
    posts: state.feedReducer.posts,
    index: state.feedReducer.index,
    hasMore: state.feedReducer.hasMore
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData : () => dispatch(fetchMessagesData()),
    addLike : (id, icon) => dispatch(addLike(id, icon)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    addComment: (id) => dispatch(addComment(id)),
    goToNextIndex: () => dispatch(goToNext())

});

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(feedModule);

export default FeedContainer;
