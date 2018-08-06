import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Feed from "./module/feed";
import Header from "./module/header";
import { fetchMessagesData } from "./module/feed/actions/feedAction";

class App extends Component {

    componentWillMount() {
        console.log("nå skjer det");
        this.props.fetchMessagesData();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="wrapper">
                    <Feed className="item1" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
        fetchMessagesData,
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
