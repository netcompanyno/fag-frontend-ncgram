import { connect } from 'react-redux';
import { fetchMessagesData, addLike, addComment, updateComment, goToNext, pulsThatIcon } from '../actions/feedAction';
import cardItem from "../components/card/cardItem";

const mapStateToProps = (state, ownProps) => ({
    itemData : ownProps.itemData,

    loading : state.feedReducer.isLoading,
    posts : state.feedReducer.posts,
    index : state.feedReducer.index,
    hasMore : state.feedReducer.hasMore,
    overOverIcon : state.feedReducer.hoverOverIcon,
});

const mapDispatchToProps = (dispatch) => ({
    fetchData : () => dispatch(fetchMessagesData()),
    addLike : (id, icon) => dispatch(addLike(id, icon)),
    updateComment : (comment) => dispatch(updateComment(comment)),
    addComment : (id) => dispatch(addComment(id)),
    goToNextIndex : () => dispatch(goToNext()),
    hoverOverThatIcon : () => dispatch(pulsThatIcon())

});

const CardItemContainer = connect(mapStateToProps, mapDispatchToProps)(cardItem);

export default CardItemContainer;
