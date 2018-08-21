import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchMessagesData } from "./module/feed/actions/feedAction";
import './App.css';
import { ConnectedRouter } from "connected-react-router";
import Routes from "./routes";

class App extends Component {

    componentWillMount() {
        localStorage.setItem('user', 'Tom');
        console.log(localStorage.getItem('user'));
        //this.props.fetchData();
    }

    render() {
        return (
            <div className="App">
                <ConnectedRouter history={this.props.history}>
                    <div>
                        <Routes history={this.props.history}/>
                    </div>
                </ConnectedRouter>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    fetchData : () => dispatch(fetchMessagesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
