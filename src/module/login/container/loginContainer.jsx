import { connect } from 'react-redux';
import LoginView from '../view/loginModule';
import { loginUser, updatePassword, updateUsername } from "../actions/loginActions";


const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateUsername: (username) => dispatch(updateUsername(username)),
    updatePassword: (pw) => dispatch(updatePassword(pw)),
    loginUser: () => dispatch(loginUser())
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginView);

export default LoginContainer;
