import React from 'react'
import { connect } from "react-redux";
import { Route, Switch } from 'react-router'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Feed from "../module/feed";
import Header from "../module/header";
import Login from "../module/login";
import { AnimatedSwitch, spring } from "react-router-transition";

const Routes = ({ ...props }) => (
    <span>
        <Header exact path="/" />
        <span className="wrapper">
        {/*<TransitionGroup>*/}
            {/*<CSSTransition key={props.key} classNames="fade" timeout={5000}>*/}
            <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="route-wrapper"
            >
                {/*<Switch location={props.location}>*/}
                <Route exact path="/" component={Login} />
                <Route exact path="/feed" component={Feed} />
                {/*</Switch>*/}
                </AnimatedSwitch>
            {/*</CSSTransition>*/}
            {/*</TransitionGroup>*/}
        </span>
    </span>
);

const mapStateToProps = (state, ownProps) => ({
    pathname : state.router.location.pathname,
    search : state.router.location.search,
    hash : state.router.location.hash,
    key : state.router.location.key,
    location : state.router.location,
    history : ownProps.history,
});

export default connect(mapStateToProps)(Routes)

function mapStyles(styles) {
    return {
        opacity : styles.opacity,
        transform : `scale(${styles.scale})`,
    };
}

function bounce(val) {
    return spring(val, {
        stiffness : 330,
        damping : 22,
    });
}

const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter : {
        opacity : 0,
        scale : 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave : {
        opacity : bounce(0),
        scale : bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive : {
        opacity : bounce(1),
        scale : bounce(1),
    },
};
