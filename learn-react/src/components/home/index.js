import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


//嵌套路由
function homeDetail({match}) {
    return <div>home嵌套路由{match.params.id}</div>
}

class Home extends React.Component {
    render() {
        const {match} = this.props;
        return (
            <div>
                <h1>home</h1>
                <ul>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>
                <Route path={`${match.path}/:id`} component={homeDetail}/>
                <Route
                    exact
                    path={match.path}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        )
    }
}

export default Home