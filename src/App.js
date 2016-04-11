import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

const Message = (props) =>
    <div><h1>{props.params.message || 'Hello Dare'}</h1><Links /></div>

const Links = () =>
   <nav>
    <Link to="/">Hello</Link>
    <Link to="/Hi">Hi</Link>
    <Link to="/Yo">Yo Low</Link>
   
   </nav>

// Parenths around message in Route means that its optional
class App extends React.Component {
    render() {
        return (
            <Router history={ hashHistory }>
                <Route path="/(:message)" component={Message}></Route>
            </Router>
        );
    }
}

export default App;
