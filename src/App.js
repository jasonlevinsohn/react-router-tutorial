import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

const Page = (props) => <div><h1>{props.location.query.message || 'Hello dare again'}</h1><Links /></div>

const Links = () =>
    <nav>
        <Link to={ {pathname: '/', query: {message: 'Yo'}} }>Yo</Link>
        <Link to={ {pathname: '/', query: {message: 'Dog'}} }>Dog</Link>
        <Link to={ {pathname: '/', query: {message: 'Peace'}} }>Peace</Link>
    </nav>


class App extends React.Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={Page}></Route>
            </Router>
        );
    }
}

export default App;
