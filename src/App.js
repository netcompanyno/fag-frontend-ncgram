import React, { Component } from 'react';
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Feed from "./module/feed";
import Header from "./module/header";
import { fetchMessagesData } from "./module/feed/actions/feedAction";
import './App.css';

class App extends Component {

    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div className="App">
                <Header exact path="/" />
                <div className="wrapper">
                    <Feed className="item1" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    fetchData : () => dispatch(fetchMessagesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
