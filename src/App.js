import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

const Message = (props) =>
    <div><h1>{props.params.message || 'Hello Dare'}</h1><Links /></div>

const Home = () => <h1>Home</h1>
const HomeBody = () => <div>this is the home body</div>
const Other = () => <h1>Other</h1>
const OtherBody = () => <div>this is the other body</div>

const Container = (props) =>
    <div>{props.header}{props.body}<Links /></div>

const Links = () =>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>
    </nav>


class App extends React.Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={Container}>
                    <IndexRoute components={{header: Home, body: HomeBody}}></IndexRoute>
                    <Route path="/other" components={{header: Other, body: OtherBody}}></Route>
                </Route>
            </Router>
        );
    }
}

export default App;
