import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';

class Home extends React.Component {
    componentWillMount() {
        this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    
    }

    routerWillLeave(nextLocation) {
        // console.log(`leaving home for ${nextLocation.pathname}`);
        // By just returning this we get a confirmation instead
        return `leaving home for ${nextLocation.pathname}`
    }

    render() {
        return <div><h1>Home</h1><Links /></div>;
    }
}

Home.contextTypes = { router: React.PropTypes.object.isRequired }

const About = () => <div><h1>About Us</h1><Links /></div>
const Contact = () => <div><h1>Contact</h1><Links /></div>
const Links = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
        </nav>
    )
};

const App = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Router>
    )
}

export default App;
