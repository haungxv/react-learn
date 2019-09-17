import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';


//路由相关
import todoList from './todoList/index.js'
import Home from './home/index.js'
import About from './about/index.js'

const App = ({store}) => (
    <Provider store={store}>
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/home/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/todo/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/todo" component={todoList}/>
        </Router>
    </Provider>
);

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App

