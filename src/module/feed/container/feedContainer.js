import { connect } from 'react-redux';
import feedModule from '../view/feedModule';
import { addNewMovie } from '../actions/feedAction';

const mapStateToProps = (state, ownProps) => ({
  title: ownProps.title,
  description: ownProps.description,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clickEvent: () => dispatch(addNewMovie())
});

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(feedModule);

export default FeedContainer;
