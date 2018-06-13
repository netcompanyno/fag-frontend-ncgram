import { connect } from 'react-redux';
import EksempelModule from '../view/eksempelModule';
import { addNewMovie } from '../actions/eksempelAction';

const mapStateToProps = (state, ownProps) => ({
  title: ownProps.title,
  description: ownProps.description,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clickEvent: () => dispatch(addNewMovie())
});

const EksempelContainer = connect(mapStateToProps, mapDispatchToProps)(EksempelModule);

export default EksempelContainer;