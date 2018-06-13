import { connect } from 'react-redux';
import Feed from '../view/feed';
import { addNewMovie } from '../actions/eksempelAction';

const mapStateToProps = (state, ownProps) => ({
    title: ownProps.title,
    description: ownProps.description,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    clickEvent: () => dispatch(addNewMovie())
});

const FeedContainer = connect(mapStateToProps, mapDispatchToProps)(EksempelModule);

export default FeedContainer;