import './App.css';
import Home from './routes/Home'
import Detail from './routes/Detail'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/movie/:id'>
                    <Detail />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
