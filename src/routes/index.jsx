import React from 'react'
import { Route, Switch } from 'react-router'
import Feed from "../module/feed";
import Header from "../module/header";
import Login from "../module/login";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

const Routes = ({ ...props }) => (
    <div>
        <Header exact path="/" />
        <span className="wrapper">
        <TransitionGroup>
            {console.log(props.history)}
             <CSSTransition key={props.key} classNames="fade" timeout={1000}>
                <Switch location={props.location}>
                    <Route className={'fade-enter'} exact path="/" component={Login} />
                    <Route className={'fade-enter'} exact path="/feed" component={Feed} />
                    <Route className={'fade-enter'} render={() => <div>Not Found</div>} />
                </Switch>
             </CSSTransition>
        </TransitionGroup>
        </span>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    pathname : state.router.location.pathname,
    search : state.router.location.search,
    hash : state.router.location.hash,
    key : state.router.location.key,
    location: state.router.location,
    history: ownProps.history
});

export default connect(mapStateToProps)(Routes)
