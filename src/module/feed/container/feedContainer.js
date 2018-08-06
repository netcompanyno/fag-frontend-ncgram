import { connect } from 'react-redux';
import feedModule from '../view/feedModule';
import { addNewMovie, fetchAllPosts, fetchMessagesData } from '../actions/feedAction';

const mapStateToProps = (state, ownProps) => ({
    title : ownProps.title,
    description : ownProps.description,
    posts: state.feedReducer.posts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    clickEvent : () => dispatch(addNewMovie()),
    fetchData : () => {
        console.log(fetchMessagesData());
        dispatch(fetchMessagesData())
    }
});

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(feedModule);

export default FeedContainer;
